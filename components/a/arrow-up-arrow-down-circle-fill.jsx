import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kbgiv_bno.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kbgiv_bno"/>`,
		"fallback": "f7:arrow-up-arrow-down-circle-fill",
	});
}

export default Component;
