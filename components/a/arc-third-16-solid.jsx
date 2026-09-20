import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mhkjd6b7d.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mhkjd6b7d"/>`,
		"fallback": "sidekickicons:arc-third-16-solid",
	});
}

export default Component;
