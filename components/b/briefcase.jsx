import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cmcc-y1ji.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cmcc-y1ji"/>`,
		"fallback": "game-icons:briefcase",
	});
}

export default Component;
