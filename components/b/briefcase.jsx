import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r_7iqepwb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r_7iqepwb"/>`,
		"fallback": "griddy-icons:briefcase",
	});
}

export default Component;
