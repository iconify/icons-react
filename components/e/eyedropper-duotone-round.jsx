import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v9cmowbpe.css';
import '../../css/e/e3iu7mb7z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="v9cmowbpe"/><path class="e3iu7mb7z"/></g>`,
		"fallback": "coolicons:eyedropper-duotone-round",
	});
}

export default Component;
