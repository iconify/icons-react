import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wbp3mj2bj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wbp3mj2bj"/>`,
		"fallback": "streamline-logos:bing-logo-1-block",
	});
}

export default Component;
