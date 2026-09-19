import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s--lpjb3v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s--lpjb3v"/>`,
		"fallback": "cbi:aqara-z1-pro-3",
	});
}

export default Component;
