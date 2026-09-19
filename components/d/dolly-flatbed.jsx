import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mn13ih9-m.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mn13ih9-m"/>`,
		"fallback": "fa7-solid:dolly-flatbed",
	});
}

export default Component;
