import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uxa3xobqu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="uxa3xobqu"/>`,
		"fallback": "streamline-logos:discourse-logo-solid",
	});
}

export default Component;
