import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p_cet_bes.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="p_cet_bes"/>`,
		"fallback": "streamline-logos:bbc-iplayer-logo-1-block",
	});
}

export default Component;
