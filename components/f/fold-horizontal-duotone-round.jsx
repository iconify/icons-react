import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s5ws0xb5u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s5ws0xb5u"/>`,
		"fallback": "coolicons:fold-horizontal-duotone-round",
	});
}

export default Component;
