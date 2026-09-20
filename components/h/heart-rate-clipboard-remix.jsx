import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wp5m3lbbu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wp5m3lbbu"/>`,
		"fallback": "streamline-sharp:heart-rate-clipboard-remix",
	});
}

export default Component;
