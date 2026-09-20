import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ob-_cqb5d.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ob-_cqb5d"/>`,
		"fallback": "la:glide",
	});
}

export default Component;
