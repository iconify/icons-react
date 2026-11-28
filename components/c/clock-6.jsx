import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jqhz7ib8t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jqhz7ib8t"/>`,
		"fallback": "noviair:clock-6",
	});
}

export default Component;
