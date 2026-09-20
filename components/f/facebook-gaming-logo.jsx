import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/l/l9ibtqvrx.css';
import '../../css/u/uh3l4ybje.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="l9ibtqvrx"/><path class="uh3l4ybje"/></g>`,
		"fallback": "streamline-logos:facebook-gaming-logo",
	});
}

export default Component;
