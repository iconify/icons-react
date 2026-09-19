import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aa3_kk4st.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aa3_kk4st"/>`,
		"fallback": "flowbite:file-outline",
	});
}

export default Component;
