import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nxu8at8bh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nxu8at8bh"/>`,
		"fallback": "simple-icons:arduino",
	});
}

export default Component;
