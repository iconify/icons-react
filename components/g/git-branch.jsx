import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r0-h5e-ap.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r0-h5e-ap"/>`,
		"fallback": "sidekickicons:git-branch",
	});
}

export default Component;
