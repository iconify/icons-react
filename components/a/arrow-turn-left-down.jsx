import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bqn3_72mx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bqn3_72mx"/>`,
		"fallback": "heroicons:arrow-turn-left-down",
	});
}

export default Component;
