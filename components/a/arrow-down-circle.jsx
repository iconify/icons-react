import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m_hp6klwa.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m_hp6klwa"/>`,
		"fallback": "simple-line-icons:arrow-down-circle",
	});
}

export default Component;
