import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cg3knqb8o.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cg3knqb8o"/>`,
		"fallback": "streamline:bracket-solid",
	});
}

export default Component;
