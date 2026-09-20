import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vws14mbpw.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vws14mbpw"/>`,
		"fallback": "pinhead:arrow-top-right-from-square-outline",
	});
}

export default Component;
