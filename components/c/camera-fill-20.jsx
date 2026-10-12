import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/baq8k5bqx.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="baq8k5bqx"/>`,
		"fallback": "garden:camera-fill-20",
	});
}

export default Component;
