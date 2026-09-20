import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zbfftllxt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zbfftllxt"/>`,
		"fallback": "simple-icons:amazons3",
	});
}

export default Component;
