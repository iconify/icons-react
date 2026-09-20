import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ie5jj8_jh.css';
import '../../css/g/gafy37gmj.css';
import '../../css/t/tbw_k9bpn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ie5jj8_jh"/><path class="gafy37gmj"/><path clip-rule="evenodd" class="tbw_k9bpn"/></g>`,
		"fallback": "solar:card-receive-bold",
	});
}

export default Component;
