import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gnuiw5usx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gnuiw5usx"/>`,
		"fallback": "selfhst:chatgpt-dark",
	});
}

export default Component;
