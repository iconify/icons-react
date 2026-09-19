import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wwq-agf0h.css';
import '../../css/i/ivt94ibbo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="wwq-agf0h"/><path class="ivt94ibbo"/></g>`,
		"fallback": "codex:html",
	});
}

export default Component;
