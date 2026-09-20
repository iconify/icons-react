import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mvux2i21t.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mvux2i21t"/>`,
		"fallback": "la:confluence",
	});
}

export default Component;
