import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tz2cu2yfe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tz2cu2yfe"/>`,
		"fallback": "sidekickicons:gamepad-solid",
	});
}

export default Component;
