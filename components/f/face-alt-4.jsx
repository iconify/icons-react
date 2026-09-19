import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qilianfni.css';
import '../../css/z/z8ukshoaq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qilianfni"/><path class="z8ukshoaq"/>`,
		"fallback": "boxicons:face-alt-4",
	});
}

export default Component;
