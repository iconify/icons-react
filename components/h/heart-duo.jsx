import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ea5taoauh.css';
import '../../css/z/zel29wb1t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ea5taoauh secondary"/><path class="primary zel29wb1t"/>`,
		"fallback": "iconaut:heart-duo",
	});
}

export default Component;
