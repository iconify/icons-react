import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tp7xi2uve.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tp7xi2uve"/>`,
		"fallback": "pixelarticons:archive-sharp",
	});
}

export default Component;
