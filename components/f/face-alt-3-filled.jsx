import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y-kbjab1h.css';
import '../../css/a/ao1_d-37i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y-kbjab1h"/><path class="ao1_d-37i"/>`,
		"fallback": "boxicons:face-alt-3-filled",
	});
}

export default Component;
