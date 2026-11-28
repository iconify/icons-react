import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sfbo3h2tc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sfbo3h2tc"/>`,
		"fallback": "noviair:fingerprint-x",
	});
}

export default Component;
