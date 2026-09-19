import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a52c-wxdw.css';
import '../../css/l/lgn49_byf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a52c-wxdw"/><path class="lgn49_byf"/>`,
		"fallback": "bx:bx-user-pin",
	});
}

export default Component;
