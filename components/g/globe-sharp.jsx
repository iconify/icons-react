import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xzkw8_bac.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xzkw8_bac"/>`,
		"fallback": "keyline-icons:globe-sharp",
	});
}

export default Component;
