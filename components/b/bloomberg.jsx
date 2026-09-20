import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m1xlz4bth.css';
import '../../css/o/ordys2bor.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m1xlz4bth"/><path class="ordys2bor"/>`,
		"fallback": "pixel:bloomberg",
	});
}

export default Component;
