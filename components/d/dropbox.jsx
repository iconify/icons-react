import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wjbwik_ov.css';

const viewBox = {"width":528,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wjbwik_ov"/>`,
		"fallback": "fa-brands:dropbox",
	});
}

export default Component;
