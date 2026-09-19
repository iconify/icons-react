import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/w/wjjv-ebjv.css';
import '../../css/k/kfs1vlehk.css';
import '../../css/v/vkkk2vbof.css';
import '../../css/z/zb5eh1b5j.css';
import '../../css/i/iocycmq6k.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="wjjv-ebjv"/><path class="kfs1vlehk"/><path class="vkkk2vbof"/><path class="zb5eh1b5j"/><path class="iocycmq6k"/></g>`,
		"fallback": "glyphs:bells",
	});
}

export default Component;
