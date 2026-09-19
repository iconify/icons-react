import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ugq91db8p.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ugq91db8p"/>`,
		"fallback": "fa7-solid:home-lg",
	});
}

export default Component;
