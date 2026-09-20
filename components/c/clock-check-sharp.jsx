import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g7q_olbms.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g7q_olbms"/>`,
		"fallback": "keyline-icons:clock-check-sharp",
	});
}

export default Component;
