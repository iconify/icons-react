import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g4tp--b2m.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g4tp--b2m"/>`,
		"fallback": "energy-icons:iceberg-20",
	});
}

export default Component;
