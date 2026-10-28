import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x9_lqqbon.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x9_lqqbon"/>`,
		"fallback": "vadivam:arrow-right-to-line",
	});
}

export default Component;
