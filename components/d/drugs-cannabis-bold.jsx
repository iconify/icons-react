import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/us2i0vbzf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="us2i0vbzf"/>`,
		"fallback": "streamline-ultimate:drugs-cannabis-bold",
	});
}

export default Component;
