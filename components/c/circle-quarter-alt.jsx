import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qrrzo_bqw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qrrzo_bqw"/>`,
		"fallback": "boxicons:circle-quarter-alt",
	});
}

export default Component;
