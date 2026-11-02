import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zz-xaq9tf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zz-xaq9tf"/>`,
		"fallback": "mingcute:image-minus-line",
	});
}

export default Component;
