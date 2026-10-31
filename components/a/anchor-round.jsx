import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/synt9-bkq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="synt9-bkq"/>`,
		"fallback": "coolicons:anchor-round",
	});
}

export default Component;
