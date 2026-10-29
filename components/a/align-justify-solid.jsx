import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/laf_138jh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="laf_138jh"/>`,
		"fallback": "withicons:align-justify-solid",
	});
}

export default Component;
