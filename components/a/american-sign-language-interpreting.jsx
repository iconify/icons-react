import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x16zck57l.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x16zck57l"/>`,
		"fallback": "fa-solid:american-sign-language-interpreting",
	});
}

export default Component;
