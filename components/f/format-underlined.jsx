import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pn0m9xbzb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pn0m9xbzb"/>`,
		"fallback": "mdi:format-underlined",
	});
}

export default Component;
