import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zct_xzbvc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zct_xzbvc"/>`,
		"fallback": "griddy-icons:gift-filled",
	});
}

export default Component;
