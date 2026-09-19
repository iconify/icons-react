import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zo_-f-osg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zo_-f-osg"/>`,
		"fallback": "game-icons:acrobatic",
	});
}

export default Component;
