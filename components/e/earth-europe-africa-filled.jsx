import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/od4db_i1i.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="od4db_i1i"/>`,
		"fallback": "carbon:earth-europe-africa-filled",
	});
}

export default Component;
