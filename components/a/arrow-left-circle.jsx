import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jzs7dac8p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jzs7dac8p"/>`,
		"fallback": "tabler:arrow-left-circle",
	});
}

export default Component;
