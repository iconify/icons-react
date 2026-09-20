import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bk-frvbab.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bk-frvbab"/>`,
		"fallback": "streamline-ultimate:arrow-button-circle-left-bold",
	});
}

export default Component;
