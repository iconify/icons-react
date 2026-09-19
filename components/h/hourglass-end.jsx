import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kqgw987ga.css';

const viewBox = {"width":1536,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kqgw987ga"/>`,
		"fallback": "fa:hourglass-end",
	});
}

export default Component;
