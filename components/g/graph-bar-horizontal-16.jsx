import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/myzfomb4k.css';
import '../../css/r/rw2djkcdp.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="myzfomb4k"/><path class="rw2djkcdp"/>`,
		"fallback": "octicon:graph-bar-horizontal-16",
	});
}

export default Component;
