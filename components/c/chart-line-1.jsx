import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/i/ibgd_d3-d.css';
import '../../css/d/duhytsawt.css';
import '../../css/e/eux6wjb8m.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="ibgd_d3-d"/><path class="duhytsawt"/><path class="eux6wjb8m"/></g>`,
		"fallback": "glyphs:chart-line-1",
	});
}

export default Component;
