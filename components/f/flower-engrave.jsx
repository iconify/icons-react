import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/a/aqikjdb1l.css';
import '../../css/j/jjtf8bcgi.css';
import '../../css/z/zyla41bsz.css';
import '../../css/h/hbi8hhkfx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="aqikjdb1l wm-k"/><path class="jjtf8bcgi wm-shadow"/><path class="wm-k zyla41bsz"/><path class="hbi8hhkfx wm-a"/></g>`,
		"fallback": "withicons:flower-engrave",
	});
}

export default Component;
