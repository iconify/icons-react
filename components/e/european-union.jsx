import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cu6-2cbky.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cu6-2cbky"/>`,
		"fallback": "thesvg-color:european-union",
	});
}

export default Component;
