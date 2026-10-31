import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lg5mpc1ks.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lg5mpc1ks"/>`,
		"fallback": "sidekickicons:checklist-boxes-solid",
	});
}

export default Component;
