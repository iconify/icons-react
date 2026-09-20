import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jqvx9zbwv.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jqvx9zbwv"/>`,
		"fallback": "medical-icon:i-kidney",
	});
}

export default Component;
