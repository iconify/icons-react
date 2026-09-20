import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bss0__tpl.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bss0__tpl"/>`,
		"fallback": "streamline:hierarchy-4-solid",
	});
}

export default Component;
