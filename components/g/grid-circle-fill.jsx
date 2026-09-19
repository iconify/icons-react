import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ks2y7_bis.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ks2y7_bis"/>`,
		"fallback": "f7:grid-circle-fill",
	});
}

export default Component;
