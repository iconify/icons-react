import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/d/d2y9adz6j.css';
import '../../css/a/a2j8d4avy.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="d2y9adz6j"/><path class="a2j8d4avy"/></g>`,
		"fallback": "streamline:ai-email-generator-spark",
	});
}

export default Component;
