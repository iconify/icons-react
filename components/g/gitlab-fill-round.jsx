import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ybi9iwwhu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ybi9iwwhu"/>`,
		"fallback": "coolicons:gitlab-fill-round",
	});
}

export default Component;
