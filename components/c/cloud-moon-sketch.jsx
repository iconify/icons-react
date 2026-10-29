import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/i/iw7sgcb0o.css';
import '../../css/m/made-2n8s.css';
import '../../css/o/o2-y213ts.css';
import '../../css/g/gww7jop3j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="iw7sgcb0o"/><path class="made-2n8s wm-a"/><path class="o2-y213ts wm-k"/><path class="gww7jop3j wm-a"/></g>`,
		"fallback": "withicons:cloud-moon-sketch",
	});
}

export default Component;
