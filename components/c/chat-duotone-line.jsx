import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vbxbaodhg.css';
import '../../css/q/qczo-_bgo.css';
import '../../css/f/fhm5o0rol.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vbxbaodhg"><path class="qczo-_bgo"/><path class="fhm5o0rol"/></g>`,
		"fallback": "lets-icons:chat-duotone-line",
	});
}

export default Component;
