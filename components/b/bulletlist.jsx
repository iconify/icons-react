import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/epi0c1bbn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="epi0c1bbn"/>`,
		"fallback": "pixelarticons:bulletlist",
	});
}

export default Component;
