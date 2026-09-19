import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qzp8159sj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qzp8159sj"/>`,
		"fallback": "boxicons:carets-left-right",
	});
}

export default Component;
