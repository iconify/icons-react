import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xx52wrbeg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xx52wrbeg"/>`,
		"fallback": "ps:birthday",
	});
}

export default Component;
