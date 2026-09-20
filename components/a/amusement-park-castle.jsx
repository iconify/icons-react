import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tfduxkh2p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tfduxkh2p"/>`,
		"fallback": "streamline-ultimate:amusement-park-castle",
	});
}

export default Component;
