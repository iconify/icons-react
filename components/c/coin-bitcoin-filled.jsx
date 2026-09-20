import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/ha34h3phx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ha34h3phx"/>`,
		"fallback": "tabler:coin-bitcoin-filled",
	});
}

export default Component;
