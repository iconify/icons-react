import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/l/ltd0id_pw.css';
import '../../css/n/nwk51vxts.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ltd0id_pw"/><path class="nwk51vxts"/></g>`,
		"fallback": "streamline-ultimate:facbook-messenger-logo",
	});
}

export default Component;
