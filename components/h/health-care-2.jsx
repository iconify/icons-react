import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qnjb_7x4p.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qnjb_7x4p"/>`,
		"fallback": "streamline-flex:health-care-2",
	});
}

export default Component;
