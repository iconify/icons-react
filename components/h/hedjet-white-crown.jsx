import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cu-j-sbwf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cu-j-sbwf"/>`,
		"fallback": "game-icons:hedjet-white-crown",
	});
}

export default Component;
