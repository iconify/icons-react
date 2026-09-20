import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/whnx72bip.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="whnx72bip"/>`,
		"fallback": "streamline-ultimate:controls-forward",
	});
}

export default Component;
