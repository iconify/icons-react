import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n7ype5bvx.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="n7ype5bvx"/>`,
		"fallback": "streamline:database-lock-solid",
	});
}

export default Component;
