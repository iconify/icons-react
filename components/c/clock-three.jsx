import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a7a2x58go.css';
import '../../css/j/jmmn-h0hh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a7a2x58go"/><path class="jmmn-h0hh"/>`,
		"fallback": "uim:clock-three",
	});
}

export default Component;
