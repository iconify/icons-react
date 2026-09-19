import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lxj41ubwj.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lxj41ubwj"/>`,
		"fallback": "fa7-solid:fighter-jet",
	});
}

export default Component;
