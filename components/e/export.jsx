import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tn5_kib2a.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tn5_kib2a"/>`,
		"fallback": "carbon:export",
	});
}

export default Component;
