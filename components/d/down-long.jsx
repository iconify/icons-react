import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cco7ibccm.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cco7ibccm"/>`,
		"fallback": "fa7-solid:down-long",
	});
}

export default Component;
