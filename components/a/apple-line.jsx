import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cjdvop56n.css';
import '../../css/s/szqow6bir.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cjdvop56n"/><path clip-rule="evenodd" class="szqow6bir"/>`,
		"fallback": "mingcute:apple-line",
	});
}

export default Component;
