import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nv9qcacyl.css';
import '../../css/d/d1pb_kbyv.css';
import '../../css/z/zzjm9eb0d.css';
import '../../css/j/jfwlpkx2w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nv9qcacyl"><path class="d1pb_kbyv"/><path class="zzjm9eb0d"/><path class="jfwlpkx2w"/></g>`,
		"fallback": "flag:cr-1x1",
	});
}

export default Component;
