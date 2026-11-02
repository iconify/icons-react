import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yd6t3v_tf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yd6t3v_tf"/>`,
		"fallback": "mingcute:group-2-line",
	});
}

export default Component;
