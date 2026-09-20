import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ghd2p1bfq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ghd2p1bfq"/>`,
		"fallback": "streamline-ultimate:coding-apps-website-big-data-database-globality-velocity-bold",
	});
}

export default Component;
