import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s4jcqrw0i.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s4jcqrw0i"/>`,
		"fallback": "f7:chevron-up-square-fill",
	});
}

export default Component;
