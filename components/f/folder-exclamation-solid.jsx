import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xm4cb0mcx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xm4cb0mcx"/>`,
		"fallback": "sidekickicons:folder-exclamation-solid",
	});
}

export default Component;
