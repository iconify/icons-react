import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q_s_vqb5k.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q_s_vqb5k"/>`,
		"fallback": "dinkie-icons:display-dot-matrix",
	});
}

export default Component;
