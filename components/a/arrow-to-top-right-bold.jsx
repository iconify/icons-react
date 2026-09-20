import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qetjnn09m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qetjnn09m"/>`,
		"fallback": "solar:arrow-to-top-right-bold",
	});
}

export default Component;
