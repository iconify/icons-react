import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ez5rt2sqq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ez5rt2sqq"/>`,
		"fallback": "noviair:highlighter",
	});
}

export default Component;
