import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s-qd2pbhi.css';
import '../../css/h/h2t_13bqf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s-qd2pbhi"/><path clip-rule="evenodd" class="h2t_13bqf"/>`,
		"fallback": "basil:heart-plus-outline",
	});
}

export default Component;
