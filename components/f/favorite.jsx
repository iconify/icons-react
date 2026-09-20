import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ixth9-o6y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ixth9-o6y"/>`,
		"fallback": "uil:favorite",
	});
}

export default Component;
