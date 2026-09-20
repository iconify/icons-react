import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/stku8xd3f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="stku8xd3f"/>`,
		"fallback": "pixelarticons:compass-solid",
	});
}

export default Component;
