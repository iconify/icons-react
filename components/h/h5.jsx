import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tfwizjb0r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tfwizjb0r"/>`,
		"fallback": "sidekickicons:h5",
	});
}

export default Component;
