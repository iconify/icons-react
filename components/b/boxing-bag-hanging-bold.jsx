import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cqcu3rbfi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cqcu3rbfi"/>`,
		"fallback": "streamline-ultimate:boxing-bag-hanging-bold",
	});
}

export default Component;
