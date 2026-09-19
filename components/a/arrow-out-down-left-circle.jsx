import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r2k-5lb6a.css';
import '../../css/j/jbyiw1r0w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r2k-5lb6a"/><path class="jbyiw1r0w"/>`,
		"fallback": "boxicons:arrow-out-down-left-circle",
	});
}

export default Component;
