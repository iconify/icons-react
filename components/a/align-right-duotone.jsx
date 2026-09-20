import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b7cmimq3w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b7cmimq3w"/>`,
		"fallback": "si:align-right-duotone",
	});
}

export default Component;
