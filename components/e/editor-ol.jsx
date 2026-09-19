import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m1i4a18dc.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m1i4a18dc"/>`,
		"fallback": "dashicons:editor-ol",
	});
}

export default Component;
