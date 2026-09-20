import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vhp7qqclq.css';
import '../../css/i/ie_qpyhgo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vhp7qqclq"/><path class="ie_qpyhgo"/>`,
		"fallback": "pixel:chart-network",
	});
}

export default Component;
