import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g0guk_b0a.css';
import '../../css/c/citsypb7n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g0guk_b0a"/><path class="citsypb7n"/>`,
		"fallback": "boxicons:dock-top-arrow-filled",
	});
}

export default Component;
