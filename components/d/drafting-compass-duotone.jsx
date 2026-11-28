import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s-k7cf_7p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="primary s-k7cf_7p"/>`,
		"fallback": "iconaut:drafting-compass-duotone",
	});
}

export default Component;
