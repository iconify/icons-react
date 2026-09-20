import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xa_kbobxu.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xa_kbobxu"/>`,
		"fallback": "map:hospital",
	});
}

export default Component;
