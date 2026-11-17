import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c4eww14cn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c4eww14cn"/>`,
		"fallback": "thesvg:glinr",
	});
}

export default Component;
