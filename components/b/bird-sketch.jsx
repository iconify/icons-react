import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/r/r-ye7do_q.css';
import '../../css/j/j9w0z1j2s.css';
import '../../css/f/fwj0tvb2f.css';
import '../../css/d/dsl3x27ur.css';
import '../../css/f/ffez6rw7v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="r-ye7do_q"/><path class="j9w0z1j2s wm-k"/><path class="fwj0tvb2f wm-a"/><path class="dsl3x27ur wm-k"/><path class="ffez6rw7v wm-a"/></g>`,
		"fallback": "withicons:bird-sketch",
	});
}

export default Component;
