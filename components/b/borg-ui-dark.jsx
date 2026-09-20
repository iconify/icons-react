import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wlc72rrtf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wlc72rrtf"/>`,
		"fallback": "selfhst:borg-ui-dark",
	});
}

export default Component;
