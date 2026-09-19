import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/ms1t--bpr.css';
import '../../css/h/h9o6htbtx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ms1t--bpr"/><path class="h9o6htbtx"/>`,
		"fallback": "boxicons:cool",
	});
}

export default Component;
