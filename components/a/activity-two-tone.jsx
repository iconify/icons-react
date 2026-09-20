import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dv7_uiesw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dv7_uiesw"/>`,
		"fallback": "keyline-icons:activity-two-tone",
	});
}

export default Component;
