import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/scks1v4hj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="scks1v4hj"/>`,
		"fallback": "streamline-ultimate:business-card-1-bold",
	});
}

export default Component;
