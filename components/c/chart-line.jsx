import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/i/ibgd_d3-d.css';
import '../../css/t/t0jd4370a.css';
import '../../css/x/xqpkavovk.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="ibgd_d3-d"/><path class="t0jd4370a"/><path class="xqpkavovk"/></g>`,
		"fallback": "glyphs:chart-line",
	});
}

export default Component;
