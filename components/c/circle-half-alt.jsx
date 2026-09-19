import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hxz_4f-mz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hxz_4f-mz"/>`,
		"fallback": "boxicons:circle-half-alt",
	});
}

export default Component;
