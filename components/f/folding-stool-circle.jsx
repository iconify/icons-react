import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/vbx_ov5ph.css';
import '../../css/h/holob1bji.css';
import '../../css/q/qul_df1so.css';
import '../../css/v/v53tpcc9b.css';
import '../../css/x/xrgx2dblx.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="vbx_ov5ph"/><path class="holob1bji"/><path class="qul_df1so"/><path class="v53tpcc9b"/><path class="xrgx2dblx"/></g>`,
		"fallback": "pepicons-pencil:folding-stool-circle",
	});
}

export default Component;
