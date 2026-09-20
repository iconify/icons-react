import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xgd551a4n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xgd551a4n"/>`,
		"fallback": "mdi:bow-tie",
	});
}

export default Component;
