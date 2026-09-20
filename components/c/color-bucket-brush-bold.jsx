import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ex18vzb4h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ex18vzb4h"/>`,
		"fallback": "streamline-ultimate:color-bucket-brush-bold",
	});
}

export default Component;
