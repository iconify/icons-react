import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k3kzb3mmz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k3kzb3mmz"/>`,
		"fallback": "flowbite:file-ppt-outline",
	});
}

export default Component;
