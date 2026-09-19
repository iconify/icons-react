import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/emb6sab_w.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="emb6sab_w"/>`,
		"fallback": "fa-solid:chalkboard-teacher",
	});
}

export default Component;
