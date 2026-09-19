import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ucz9flbsv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ucz9flbsv"/>`,
		"fallback": "game-icons:bottled-bolt",
	});
}

export default Component;
