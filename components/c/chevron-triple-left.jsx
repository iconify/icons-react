import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kuf2nkvgz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kuf2nkvgz"/>`,
		"fallback": "mdi:chevron-triple-left",
	});
}

export default Component;
