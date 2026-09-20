import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gcw80rb5v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gcw80rb5v"/>`,
		"fallback": "sidekickicons:dots-2x3-solid",
	});
}

export default Component;
