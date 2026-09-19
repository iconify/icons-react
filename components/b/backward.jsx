import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mvji6kbnw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mvji6kbnw"/>`,
		"fallback": "fa6-solid:backward",
	});
}

export default Component;
