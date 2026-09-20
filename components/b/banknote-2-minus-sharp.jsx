import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w00-aqbpv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w00-aqbpv"/>`,
		"fallback": "keyline-icons:banknote-2-minus-sharp",
	});
}

export default Component;
