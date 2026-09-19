import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fqur01bup.css';

const viewBox = {"width":551,"height":634};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fqur01bup"/>`,
		"fallback": "ls:dark",
	});
}

export default Component;
