import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pr52f_b5y.css';
import '../../css/m/m9569c2lu.css';
import '../../css/h/hda2sac4w.css';
import '../../css/w/wd3fsdbjr.css';
import '../../css/d/ddpx3-70y.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="pr52f_b5y"><rect class="m9569c2lu"/><rect class="hda2sac4w"/><rect class="wd3fsdbjr"/><rect class="ddpx3-70y"/></g>`,
		"fallback": "glyphs:box-layout-3-bold",
	});
}

export default Component;
