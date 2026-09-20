import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/coc607b1m.css';
import '../../css/d/d0kk4rblb.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="coc607b1m"/><path clip-rule="evenodd" class="d0kk4rblb"/>`,
		"fallback": "qlementine-icons:crosshair-16",
	});
}

export default Component;
