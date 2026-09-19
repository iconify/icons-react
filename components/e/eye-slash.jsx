import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/u/u5klyabmf.css';
import '../../css/k/kb9gb1b9t.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="u5klyabmf"/><path class="kb9gb1b9t"/></g>`,
		"fallback": "glyphs:eye-slash",
	});
}

export default Component;
