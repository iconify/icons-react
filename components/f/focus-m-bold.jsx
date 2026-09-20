import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tryhe-3gz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tryhe-3gz"/>`,
		"fallback": "streamline-ultimate:focus-m-bold",
	});
}

export default Component;
