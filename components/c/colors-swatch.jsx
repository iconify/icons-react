import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zq5sj8rvh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zq5sj8rvh"/>`,
		"fallback": "pixelarticons:colors-swatch",
	});
}

export default Component;
