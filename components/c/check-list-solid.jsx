import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/as6eg0b3o.css';
import '../../css/i/i7sr6ubzr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="as6eg0b3o"/><path class="i7sr6ubzr"/>`,
		"fallback": "pixel:check-list-solid",
	});
}

export default Component;
