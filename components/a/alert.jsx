import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iu47f4b-y.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iu47f4b-y"/>`,
		"fallback": "picon:alert",
	});
}

export default Component;
