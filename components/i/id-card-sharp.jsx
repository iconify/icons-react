import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qfql4b46l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qfql4b46l"/>`,
		"fallback": "famicons:id-card-sharp",
	});
}

export default Component;
