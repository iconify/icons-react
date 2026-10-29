import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z22a7qbic.css';
import '../../css/a/ak65cgiry.css';
import '../../css/n/n7_q_sbsa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wm-a z22a7qbic"/><path class="ak65cgiry wm-k"/><path class="n7_q_sbsa wm-k"/>`,
		"fallback": "withicons-bauhaus:chart-line",
	});
}

export default Component;
