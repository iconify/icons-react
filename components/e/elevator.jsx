import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ud_ovfl8i.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ud_ovfl8i"/>`,
		"fallback": "dinkie-icons:elevator",
	});
}

export default Component;
