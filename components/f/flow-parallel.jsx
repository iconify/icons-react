import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/anhxi-3cu.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="anhxi-3cu"/>`,
		"fallback": "entypo:flow-parallel",
	});
}

export default Component;
