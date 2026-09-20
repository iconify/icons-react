import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/whq6z2a_g.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="whq6z2a_g"/>`,
		"fallback": "streamline-pixel:hand-gesture-finger-click",
	});
}

export default Component;
