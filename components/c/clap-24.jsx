import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tba9eignq.css';
import '../../css/q/q0yykybqk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tba9eignq"/><path clip-rule="evenodd" class="q0yykybqk"/>`,
		"fallback": "qlementine-icons:clap-24",
	});
}

export default Component;
