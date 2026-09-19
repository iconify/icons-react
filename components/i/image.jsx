import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y49vkvlfv.css';
import '../../css/e/elzzhttxr.css';
import '../../css/c/ciumniaxp.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="y49vkvlfv"/><path clip-rule="evenodd" class="elzzhttxr"/><path class="ciumniaxp"/></g>`,
		"fallback": "glyphs-poly:image",
	});
}

export default Component;
