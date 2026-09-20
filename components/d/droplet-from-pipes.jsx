import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/egrpiub7s.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="egrpiub7s"/>`,
		"fallback": "pinhead:droplet-from-pipes",
	});
}

export default Component;
