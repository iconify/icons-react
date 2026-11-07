import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u5nysxzsm.css';
import '../../css/b/bftzabcak.css';
import '../../css/z/zhscj931y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u5nysxzsm"/><path clip-rule="evenodd" class="bftzabcak"/><path class="zhscj931y"/>`,
		"fallback": "solar:card-2-bold",
	});
}

export default Component;
