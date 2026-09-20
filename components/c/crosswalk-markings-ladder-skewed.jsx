import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/edzsecg7x.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="edzsecg7x"/>`,
		"fallback": "pinhead:crosswalk-markings-ladder-skewed",
	});
}

export default Component;
