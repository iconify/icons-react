import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/t/tmpsgjp3a.css';
import '../../css/e/eenjw6b9g.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="tmpsgjp3a"/><path class="eenjw6b9g"/></g>`,
		"fallback": "streamline:crop-selection",
	});
}

export default Component;
