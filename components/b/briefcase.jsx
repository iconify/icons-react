import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k70tccb4z.css';
import '../../css/j/jhd2mpbdy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k70tccb4z"/><path class="jhd2mpbdy"/>`,
		"fallback": "famicons:briefcase",
	});
}

export default Component;
