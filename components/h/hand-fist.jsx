import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r708_dubz.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r708_dubz"/>`,
		"fallback": "fa6-solid:hand-fist",
	});
}

export default Component;
