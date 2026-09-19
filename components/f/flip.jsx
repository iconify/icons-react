import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/c/cx4n05xdu.css';
import '../../css/x/x-wp8y4dt.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="cx4n05xdu"/><path class="x-wp8y4dt"/></g>`,
		"fallback": "glyphs:flip",
	});
}

export default Component;
