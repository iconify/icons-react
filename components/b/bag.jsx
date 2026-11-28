import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c41vt3bzy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c41vt3bzy"/>`,
		"fallback": "noviair-light:bag",
	});
}

export default Component;
