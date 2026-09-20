import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oe4uzma3l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oe4uzma3l"/>`,
		"fallback": "thesvg:css-design-awards",
	});
}

export default Component;
