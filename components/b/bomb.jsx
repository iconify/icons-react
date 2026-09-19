import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/khr5y5bwv.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="khr5y5bwv"/>`,
		"fallback": "fa7-solid:bomb",
	});
}

export default Component;
