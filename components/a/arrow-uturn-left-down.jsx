import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m1fq_zfjj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m1fq_zfjj"/>`,
		"fallback": "at-icons:arrow-uturn-left-down",
	});
}

export default Component;
