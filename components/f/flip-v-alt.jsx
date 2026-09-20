import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sr_4lkqsn.css';
import '../../css/k/kwj8pfbpn.css';
import '../../css/x/xqzgogbta.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sr_4lkqsn"/><path class="kwj8pfbpn"/><path class="xqzgogbta"/>`,
		"fallback": "uim:flip-v-alt",
	});
}

export default Component;
