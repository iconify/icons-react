import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ycarj_sir.css';
import '../../css/d/d2npymh2k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ycarj_sir"/><path class="d2npymh2k"/>`,
		"fallback": "lineicons:ethereum-logo",
	});
}

export default Component;
