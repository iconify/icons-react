import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xkuhzob7s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xkuhzob7s"/>`,
		"fallback": "tabler:circle-minus-2",
	});
}

export default Component;
