import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sq9ao7byp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="sq9ao7byp"/>`,
		"fallback": "flowbite:file-chart-bar-solid",
	});
}

export default Component;
