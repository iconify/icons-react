import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/y/yrx4-abih.css';
import '../../css/b/bgm4plbax.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="yrx4-abih"/><path class="bgm4plbax"/></g>`,
		"fallback": "glyphs:arrows-round-outline",
	});
}

export default Component;
