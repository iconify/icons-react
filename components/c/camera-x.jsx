import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kkx5sub2p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kkx5sub2p"/>`,
		"fallback": "noviair:camera-x",
	});
}

export default Component;
