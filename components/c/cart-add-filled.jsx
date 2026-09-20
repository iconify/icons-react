import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oxrcajl4t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oxrcajl4t"/>`,
		"fallback": "tdesign:cart-add-filled",
	});
}

export default Component;
