import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2lnh2bmj.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d2lnh2bmj"/>`,
		"fallback": "dinkie-icons:four-of-bamboos-mahjong",
	});
}

export default Component;
