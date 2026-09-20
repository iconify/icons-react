import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fjulmd4st.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fjulmd4st"/>`,
		"fallback": "ri:folder-shield-2-line",
	});
}

export default Component;
