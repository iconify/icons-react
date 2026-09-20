import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zl386l-8b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zl386l-8b"/>`,
		"fallback": "streamline-logos:bbc-iplayer-logo-1-solid",
	});
}

export default Component;
