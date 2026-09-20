import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a6ovqkmll.css';
import '../../css/b/bi7kcybaf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a6ovqkmll"/><path class="bi7kcybaf"/>`,
		"fallback": "mingcute:hail-fill",
	});
}

export default Component;
