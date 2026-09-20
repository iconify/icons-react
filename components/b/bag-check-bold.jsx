import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pih1z72mh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pih1z72mh"/>`,
		"fallback": "solar:bag-check-bold",
	});
}

export default Component;
