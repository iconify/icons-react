import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s10jxb77c.css';
import '../../css/q/q0ne03bxg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s10jxb77c"/><path class="q0ne03bxg"/>`,
		"fallback": "token:clh",
	});
}

export default Component;
