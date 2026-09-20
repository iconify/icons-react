import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gko9cn1tf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gko9cn1tf"/>`,
		"fallback": "pixelarticons:balloon",
	});
}

export default Component;
