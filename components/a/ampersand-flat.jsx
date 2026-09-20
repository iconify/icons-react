import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sjafd7blv.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="sjafd7blv"/>`,
		"fallback": "streamline-color:ampersand-flat",
	});
}

export default Component;
