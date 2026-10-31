import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hi7dpsbsk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hi7dpsbsk"/>`,
		"fallback": "coolicons:clock-3-round",
	});
}

export default Component;
