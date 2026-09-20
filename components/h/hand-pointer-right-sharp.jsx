import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/licps3vzx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="licps3vzx"/>`,
		"fallback": "keyline-icons:hand-pointer-right-sharp",
	});
}

export default Component;
