import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jc4bs3qme.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jc4bs3qme"/>`,
		"fallback": "f7:arrow-right-to-line",
	});
}

export default Component;
