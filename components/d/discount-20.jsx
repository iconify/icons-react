import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gmd-u84-k.css';
import '../../css/h/h9ysk2g4z.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gmd-u84-k"/><path class="h9ysk2g4z"/>`,
		"fallback": "energy-icons:discount-20",
	});
}

export default Component;
