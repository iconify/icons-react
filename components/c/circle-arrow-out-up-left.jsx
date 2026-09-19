import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/msgzh1bni.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="msgzh1bni"/>`,
		"fallback": "hugeicons:circle-arrow-out-up-left",
	});
}

export default Component;
