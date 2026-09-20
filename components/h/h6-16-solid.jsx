import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kp33byh8u.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kp33byh8u"/>`,
		"fallback": "sidekickicons:h6-16-solid",
	});
}

export default Component;
