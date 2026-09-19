import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/husm8abss.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="husm8abss"/>`,
		"fallback": "dinkie-icons:address-book-small",
	});
}

export default Component;
