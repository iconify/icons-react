import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ijspo9nkb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ijspo9nkb"/>`,
		"fallback": "mingcute:cancer-fill",
	});
}

export default Component;
