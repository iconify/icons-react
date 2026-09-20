import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wciun3xwf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wciun3xwf"/>`,
		"fallback": "streamline-logos:amazon-logo-block",
	});
}

export default Component;
