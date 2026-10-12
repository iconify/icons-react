import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ktt2-ebbb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ktt2-ebbb"/>`,
		"fallback": "andrsrxn:arrows-diagonal-left",
	});
}

export default Component;
