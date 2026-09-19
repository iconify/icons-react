import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/t/ta95fvs2h.css';
import '../../css/j/jdzgb0a1a.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="ta95fvs2h"/><path class="jdzgb0a1a"/></g>`,
		"fallback": "glyphs:baseball",
	});
}

export default Component;
