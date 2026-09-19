import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k797_m4st.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k797_m4st"/>`,
		"fallback": "ci:home-heart-1",
	});
}

export default Component;
