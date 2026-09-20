import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mxe-vkb4m.css';
import '../../css/v/vnwywmtwn.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mxe-vkb4m"/><path class="vnwywmtwn"/>`,
		"fallback": "octicon:codespaces-16",
	});
}

export default Component;
