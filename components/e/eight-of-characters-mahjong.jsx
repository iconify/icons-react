import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/li0c3jbvx.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="li0c3jbvx"/>`,
		"fallback": "dinkie-icons:eight-of-characters-mahjong",
	});
}

export default Component;
