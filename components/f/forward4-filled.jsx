import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u9qn4wb6v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u9qn4wb6v"/>`,
		"fallback": "reicon:forward4-filled",
	});
}

export default Component;
