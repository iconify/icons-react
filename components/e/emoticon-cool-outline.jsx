import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n6z6mtbdo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n6z6mtbdo"/>`,
		"fallback": "mdi:emoticon-cool-outline",
	});
}

export default Component;
