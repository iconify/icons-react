import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fwclecbzy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fwclecbzy"/>`,
		"fallback": "keyline-icons:arrow-big-right-short",
	});
}

export default Component;
