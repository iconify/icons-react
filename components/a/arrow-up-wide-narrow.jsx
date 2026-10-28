import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e3plau2py.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e3plau2py"/>`,
		"fallback": "vadivam:arrow-up-wide-narrow",
	});
}

export default Component;
