import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q_t_n4bmf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q_t_n4bmf"/>`,
		"fallback": "vadivam:germ",
	});
}

export default Component;
