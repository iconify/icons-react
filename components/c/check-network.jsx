import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/af9r2o3oq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="af9r2o3oq"/>`,
		"fallback": "mdi:check-network",
	});
}

export default Component;
