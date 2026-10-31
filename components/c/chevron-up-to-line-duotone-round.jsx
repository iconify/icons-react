import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gklbd6bzq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gklbd6bzq"/>`,
		"fallback": "coolicons:chevron-up-to-line-duotone-round",
	});
}

export default Component;
