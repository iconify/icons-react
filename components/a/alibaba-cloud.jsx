import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cmumx4xkz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cmumx4xkz"/>`,
		"fallback": "thesvg:alibaba-cloud",
	});
}

export default Component;
