import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/f/f7wbymi_z.css';
import '../../css/j/jyta25btr.css';
import '../../css/p/pf42nndkp.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="f7wbymi_z"/><path class="jyta25btr"/><path class="pf42nndkp"/></g>`,
		"fallback": "glyphs:filing-cabinet",
	});
}

export default Component;
