import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m63u-cblq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m63u-cblq"/>`,
		"fallback": "keyline-icons:caret-down-sharp-duotone",
	});
}

export default Component;
