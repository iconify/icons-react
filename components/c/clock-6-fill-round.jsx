import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y-nt2u-ev.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y-nt2u-ev"/>`,
		"fallback": "coolicons:clock-6-fill-round",
	});
}

export default Component;
