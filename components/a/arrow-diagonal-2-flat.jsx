import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wnnx2lbvx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wnnx2lbvx"/>`,
		"fallback": "streamline-sharp-color:arrow-diagonal-2-flat",
	});
}

export default Component;
