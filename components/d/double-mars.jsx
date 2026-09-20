import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fj8xsmbnu.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fj8xsmbnu"/>`,
		"fallback": "pinhead:double-mars",
	});
}

export default Component;
