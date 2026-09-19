import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z8e5aqb6g.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z8e5aqb6g"/>`,
		"fallback": "dinkie-icons:four-of-characters-mahjong",
	});
}

export default Component;
