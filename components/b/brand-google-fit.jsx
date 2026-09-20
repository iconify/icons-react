import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w1t8_n4gk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w1t8_n4gk"/>`,
		"fallback": "tabler:brand-google-fit",
	});
}

export default Component;
