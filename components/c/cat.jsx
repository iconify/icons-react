import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t0m9b6bod.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t0m9b6bod"/>`,
		"fallback": "f7:cat",
	});
}

export default Component;
