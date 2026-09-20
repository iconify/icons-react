import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tt4x0ywtd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tt4x0ywtd"/>`,
		"fallback": "simple-icons:bower",
	});
}

export default Component;
