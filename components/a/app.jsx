import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ezj3qtbki.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ezj3qtbki"/>`,
		"fallback": "f7:app",
	});
}

export default Component;
