import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uitkfv-im.css';
import '../../css/n/n5mt1qbwh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uitkfv-im"/><path class="n5mt1qbwh"/>`,
		"fallback": "lets-icons:book-open-alt-fill",
	});
}

export default Component;
