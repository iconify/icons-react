import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/m/m_t-z1mbs.css';
import '../../css/e/e2kztj1me.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="m_t-z1mbs"/><path class="e2kztj1me"/></g>`,
		"fallback": "glyphs:box-1",
	});
}

export default Component;
