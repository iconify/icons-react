import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/n/n5eehhzhn.css';
import '../../css/w/w2o2-_dok.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="n5eehhzhn"/><path class="w2o2-_dok"/></g>`,
		"fallback": "glyphs:crop-1",
	});
}

export default Component;
