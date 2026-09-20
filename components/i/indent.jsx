import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n_shecbdt.css';
import '../../css/w/wodq73bfc.css';

const viewBox = {"width":25,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n_shecbdt"/><path clip-rule="evenodd" class="wodq73bfc"/>`,
		"fallback": "lineicons:indent",
	});
}

export default Component;
