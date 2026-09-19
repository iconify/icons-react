import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jmf4pnb7m.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jmf4pnb7m"/>`,
		"fallback": "fa7-solid:arrows-to-dot",
	});
}

export default Component;
