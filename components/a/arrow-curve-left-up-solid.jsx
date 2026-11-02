import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qakrv054d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qakrv054d"/>`,
		"fallback": "sidekickicons:arrow-curve-left-up-solid",
	});
}

export default Component;
