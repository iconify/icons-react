import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q9lwtj8qo.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q9lwtj8qo"/>`,
		"fallback": "fa7-solid:3",
	});
}

export default Component;
