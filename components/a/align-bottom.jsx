import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ciix0zmih.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ciix0zmih"/>`,
		"fallback": "radix-icons:align-bottom",
	});
}

export default Component;
