import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gut_bzbno.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gut_bzbno"/>`,
		"fallback": "carbon:data-reference",
	});
}

export default Component;
