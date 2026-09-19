import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jlcle3b6w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jlcle3b6w"/>`,
		"fallback": "gg:corner-double-right-down",
	});
}

export default Component;
