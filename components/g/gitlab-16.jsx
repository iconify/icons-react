import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h3m-0_wes.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h3m-0_wes"/>`,
		"fallback": "qlementine-icons:gitlab-16",
	});
}

export default Component;
