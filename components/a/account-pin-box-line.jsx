import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u85shjb5m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u85shjb5m"/>`,
		"fallback": "ri:account-pin-box-line",
	});
}

export default Component;
