import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l-4sl_2no.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="l-4sl_2no"/>`,
		"fallback": "streamline:add-1-solid",
	});
}

export default Component;
