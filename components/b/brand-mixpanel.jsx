import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8d6nobty.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n8d6nobty"/>`,
		"fallback": "tabler:brand-mixpanel",
	});
}

export default Component;
