import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s83cy2i3o.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s83cy2i3o"/>`,
		"fallback": "lsicon:database-outline",
	});
}

export default Component;
