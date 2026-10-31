import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ejzu5je1m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ejzu5je1m"/>`,
		"fallback": "coolicons:infinity-duocolor-round",
	});
}

export default Component;
