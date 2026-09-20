import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cmewf005f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cmewf005f"/>`,
		"fallback": "streamline-ultimate:earth-pin-2-bold",
	});
}

export default Component;
