import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sn8k0jbsg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sn8k0jbsg"/>`,
		"fallback": "coolicons:arrow-right-large-duocolor-round",
	});
}

export default Component;
