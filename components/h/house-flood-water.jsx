import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vwvf1sbwm.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vwvf1sbwm"/>`,
		"fallback": "fa7-solid:house-flood-water",
	});
}

export default Component;
