import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x80f4s0za.css';
import '../../css/y/yu1gnvz7g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x80f4s0za"/><path class="yu1gnvz7g"/>`,
		"fallback": "eos-icons:container-outlined",
	});
}

export default Component;
