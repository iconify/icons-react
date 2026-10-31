import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nfm_2l7uc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nfm_2l7uc"/>`,
		"fallback": "coolicons:chevron-double-down-duotone-round",
	});
}

export default Component;
