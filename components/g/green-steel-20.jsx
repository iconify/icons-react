import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aiwfi4b5d.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aiwfi4b5d"/>`,
		"fallback": "energy-icons:green-steel-20",
	});
}

export default Component;
