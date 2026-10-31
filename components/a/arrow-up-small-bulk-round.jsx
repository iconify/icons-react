import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t8u9f286n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t8u9f286n"/>`,
		"fallback": "coolicons:arrow-up-small-bulk-round",
	});
}

export default Component;
