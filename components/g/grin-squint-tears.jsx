import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/x/x_-he3egs.css';
import '../../css/l/lktlxngct.css';
import '../../css/n/ni1-kfgdq.css';
import '../../css/q/qga9xeyyw.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="x_-he3egs"/><path class="lktlxngct"/><path class="ni1-kfgdq"/><path class="qga9xeyyw"/></g>`,
		"fallback": "glyphs:grin-squint-tears",
	});
}

export default Component;
