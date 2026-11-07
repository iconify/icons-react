import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ngq_w4btn.css';
import '../../css/h/htgnsl4vu.css';
import '../../css/v/vte5evnzt.css';
import '../../css/f/f9hzkm85j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ngq_w4btn"/><path class="htgnsl4vu"/><path class="vte5evnzt"/><path class="f9hzkm85j"/>`,
		"fallback": "solar:box-bold",
	});
}

export default Component;
