import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dic_g0bmg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dic_g0bmg"/>`,
		"fallback": "keyline-icons:badge-duotone",
	});
}

export default Component;
