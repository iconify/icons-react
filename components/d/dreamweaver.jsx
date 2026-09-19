import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nk-0nwoxu.css';
import '../../css/k/klrrfacgb.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nk-0nwoxu"/><path class="klrrfacgb"/>`,
		"fallback": "devicon:dreamweaver",
	});
}

export default Component;
