import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nm1ss5uze.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nm1ss5uze"/>`,
		"fallback": "sidekickicons:face-smile-plus-16-solid",
	});
}

export default Component;
