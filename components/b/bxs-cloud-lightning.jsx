import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q_42c7mmw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q_42c7mmw"/>`,
		"fallback": "bx:bxs-cloud-lightning",
	});
}

export default Component;
