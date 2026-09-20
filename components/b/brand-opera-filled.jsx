import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cxbsks6my.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cxbsks6my"/>`,
		"fallback": "tabler:brand-opera-filled",
	});
}

export default Component;
