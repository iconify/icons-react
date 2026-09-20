import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e_0685brw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e_0685brw"/>`,
		"fallback": "pixelarticons:cellular-signal-2-sharp",
	});
}

export default Component;
