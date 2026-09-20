import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u9llj72st.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u9llj72st"/>`,
		"fallback": "mingcute:drawer-fill",
	});
}

export default Component;
