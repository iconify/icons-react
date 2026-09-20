import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cw_skj6xc.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cw_skj6xc"/>`,
		"fallback": "streamline-color:cloud-flat",
	});
}

export default Component;
