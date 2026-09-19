import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wksmk7i5x.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wksmk7i5x"/>`,
		"fallback": "game-icons:elbow-pad",
	});
}

export default Component;
