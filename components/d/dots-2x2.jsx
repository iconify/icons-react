import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/avd91y_7v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="avd91y_7v"/>`,
		"fallback": "sidekickicons:dots-2x2",
	});
}

export default Component;
