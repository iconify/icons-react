import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/f/fm5u9g7-b.css';
import '../../css/g/g4q_d4blp.css';
import '../../css/r/r1i2fkb-z.css';
import '../../css/z/z0l13u7rz.css';
import '../../css/e/eumle_byd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="fm5u9g7-b wm-k"/><path class="g4q_d4blp wm-a"/><path class="r1i2fkb-z wm-shadow"/><path class="wm-k z0l13u7rz"/><path class="eumle_byd wm-a"/></g>`,
		"fallback": "withicons:apple-engrave",
	});
}

export default Component;
