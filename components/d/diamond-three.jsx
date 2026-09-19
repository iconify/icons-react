import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uz5lfebzj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uz5lfebzj"/>`,
		"fallback": "icon-park-outline:diamond-three",
	});
}

export default Component;
