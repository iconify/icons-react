import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uczo_kpja.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uczo_kpja"/>`,
		"fallback": "cbi:fisker",
	});
}

export default Component;
