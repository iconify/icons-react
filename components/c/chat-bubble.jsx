import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rls_dv.css';
import '../../css/s/so-from-70.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rls_dv"/>`,
		"fallback": "line-md:chat-bubble",
	});
}

export default Component;
