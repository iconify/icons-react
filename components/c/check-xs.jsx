import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cl8fc0bgt.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cl8fc0bgt"/>`,
		"fallback": "pajamas:check-xs",
	});
}

export default Component;
