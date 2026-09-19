import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kz0-44bhb.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kz0-44bhb"/>`,
		"fallback": "bi:gift",
	});
}

export default Component;
