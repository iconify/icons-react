import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d381xzbzn.css';
import '../../css/s/sethd29la.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d381xzbzn"/><path class="sethd29la"/>`,
		"fallback": "energy-icons:gear-20",
	});
}

export default Component;
