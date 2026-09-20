import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/e/eo6attb9e.css';
import '../../css/t/t50s-snkw.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="eo6attb9e"/><path class="t50s-snkw"/></g>`,
		"fallback": "streamline:class-lesson",
	});
}

export default Component;
