import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pwh6u8bnv.css';
import '../../css/f/flcy1g-2p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pwh6u8bnv"/><path class="flcy1g-2p"/>`,
		"fallback": "streamline-ultimate:human-resources-businessman-clock-bold",
	});
}

export default Component;
