import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wsmpazbwt.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wsmpazbwt"/>`,
		"fallback": "dinkie-icons:bamboo-mahjong",
	});
}

export default Component;
