import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ra-isvbtw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ra-isvbtw"/>`,
		"fallback": "keyline-icons:caret-up-sharp-duotone",
	});
}

export default Component;
