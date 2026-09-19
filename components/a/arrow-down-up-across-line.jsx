import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dq-3olb-f.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dq-3olb-f"/>`,
		"fallback": "fa7-solid:arrow-down-up-across-line",
	});
}

export default Component;
