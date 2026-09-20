import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sk11j18xh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sk11j18xh"/>`,
		"fallback": "mdi:format-list-bulleted",
	});
}

export default Component;
