import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qidz9ubar.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qidz9ubar"/>`,
		"fallback": "boxicons:circle-three-quarter",
	});
}

export default Component;
