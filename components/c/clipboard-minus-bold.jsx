import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kuay936ng.css';
import '../../css/c/c4946-17v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kuay936ng"/><path class="c4946-17v"/>`,
		"fallback": "solar:clipboard-minus-bold",
	});
}

export default Component;
