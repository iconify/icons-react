import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iz3unxo7b.css';
import '../../css/c/cgvyvxz3v.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iz3unxo7b"/><path class="cgvyvxz3v"/>`,
		"fallback": "carbon:data-table-reference",
	});
}

export default Component;
