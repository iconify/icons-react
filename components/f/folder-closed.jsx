import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v4x2o6byr.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v4x2o6byr"/>`,
		"fallback": "oui:folder-closed",
	});
}

export default Component;
