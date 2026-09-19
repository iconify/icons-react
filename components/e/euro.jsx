import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q3tu72jrn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q3tu72jrn"/>`,
		"fallback": "gg:euro",
	});
}

export default Component;
