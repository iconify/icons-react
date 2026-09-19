import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hghv_cv8t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hghv_cv8t"/>`,
		"fallback": "hugeicons:call-blocked",
	});
}

export default Component;
