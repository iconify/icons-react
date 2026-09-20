import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iwaanvb0r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iwaanvb0r"/>`,
		"fallback": "streamline-ultimate:ati-logo-bold",
	});
}

export default Component;
