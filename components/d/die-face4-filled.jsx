import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/emu97kndw.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="emu97kndw"/>`,
		"fallback": "dinkie-icons:die-face4-filled",
	});
}

export default Component;
