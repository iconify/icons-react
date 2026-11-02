import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nd4pfqx8d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nd4pfqx8d"/>`,
		"fallback": "mingcute:git-pull-request-draft-fill",
	});
}

export default Component;
