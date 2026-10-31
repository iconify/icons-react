import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d60tyn8oc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d60tyn8oc"/>`,
		"fallback": "coolicons:coolicons-duocolor-round",
	});
}

export default Component;
