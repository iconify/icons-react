import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jc2r4ounr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jc2r4ounr"/>`,
		"fallback": "keyline-icons:fast-forward-sharp",
	});
}

export default Component;
