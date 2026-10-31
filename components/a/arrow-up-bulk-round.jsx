import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rptoojz2b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rptoojz2b"/>`,
		"fallback": "coolicons:arrow-up-bulk-round",
	});
}

export default Component;
