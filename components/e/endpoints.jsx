import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jb8gpab0e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jb8gpab0e"/>`,
		"fallback": "eos-icons:endpoints",
	});
}

export default Component;
