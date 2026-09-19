import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/laczu_kou.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="laczu_kou"/>`,
		"fallback": "fa6-solid:clipboard-list",
	});
}

export default Component;
