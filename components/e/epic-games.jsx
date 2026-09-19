import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uwu36wfvx.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uwu36wfvx"/>`,
		"fallback": "cib:epic-games",
	});
}

export default Component;
