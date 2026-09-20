import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k1ki_ab-d.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k1ki_ab-d"/>`,
		"fallback": "pinhead:dot-outline",
	});
}

export default Component;
