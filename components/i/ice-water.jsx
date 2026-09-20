import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gj2p_abnt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gj2p_abnt"/>`,
		"fallback": "streamline-ultimate:ice-water",
	});
}

export default Component;
