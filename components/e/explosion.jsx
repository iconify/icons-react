import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s27823v-r.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s27823v-r"/>`,
		"fallback": "fa7-solid:explosion",
	});
}

export default Component;
