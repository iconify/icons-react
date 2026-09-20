import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qk7c0-brn.css';
import '../../css/b/bcoesb68t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qk7c0-brn"/><path class="bcoesb68t"/>`,
		"fallback": "streamline-ultimate:cog-hand-give-1-bold",
	});
}

export default Component;
