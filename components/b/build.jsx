import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l-7fv8ivv.css';

const viewBox = {"width":42,"height":42};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l-7fv8ivv"/>`,
		"fallback": "topcoat:build",
	});
}

export default Component;
