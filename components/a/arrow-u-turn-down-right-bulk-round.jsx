import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ntejkxhrw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ntejkxhrw"/>`,
		"fallback": "coolicons:arrow-u-turn-down-right-bulk-round",
	});
}

export default Component;
