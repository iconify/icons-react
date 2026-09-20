import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k34qf5lmk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k34qf5lmk"/>`,
		"fallback": "mynaui:corner-down-left",
	});
}

export default Component;
