import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wql0g2wcl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wql0g2wcl"/>`,
		"fallback": "solar:cursor-broken",
	});
}

export default Component;
