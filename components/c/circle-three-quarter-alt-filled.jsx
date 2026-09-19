import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zvy_q-q5w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zvy_q-q5w"/>`,
		"fallback": "boxicons:circle-three-quarter-alt-filled",
	});
}

export default Component;
