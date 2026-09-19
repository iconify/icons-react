import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ksu31ioyl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b ksu31ioyl"/>`,
		"fallback": "boxicons:circle-dashed-half",
	});
}

export default Component;
