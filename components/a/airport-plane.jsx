import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lz2g28hhd.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lz2g28hhd"/>`,
		"fallback": "streamline:airport-plane",
	});
}

export default Component;
