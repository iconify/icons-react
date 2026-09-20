import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jueal6bpk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jueal6bpk"/>`,
		"fallback": "solar:arrow-to-top-right-broken",
	});
}

export default Component;
