import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nh4pq_8fd.css';
import '../../css/e/ebhrip5sz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="duoicon-primary-layer nh4pq_8fd"/><path class="duoicon-secondary-layer ebhrip5sz"/>`,
		"fallback": "duo-icons:android",
	});
}

export default Component;
