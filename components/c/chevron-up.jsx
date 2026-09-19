import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ofjvps7na.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ofjvps7na"/>`,
		"fallback": "gg:chevron-up",
	});
}

export default Component;
