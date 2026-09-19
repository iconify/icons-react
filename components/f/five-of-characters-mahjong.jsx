import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a60ncdcxc.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a60ncdcxc"/>`,
		"fallback": "dinkie-icons:five-of-characters-mahjong",
	});
}

export default Component;
