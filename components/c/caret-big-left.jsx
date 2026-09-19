import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wo4ztu6st.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wo4ztu6st"/>`,
		"fallback": "boxicons:caret-big-left",
	});
}

export default Component;
