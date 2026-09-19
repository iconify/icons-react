import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/v/v6d912b-j.css';
import '../../css/a/a2hdhl6ak.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="v6d912b-j"/><path class="a2hdhl6ak"/></g>`,
		"fallback": "glyphs:bandage",
	});
}

export default Component;
