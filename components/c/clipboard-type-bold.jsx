import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s4z7njbqe.css';
import '../../css/c/c4946-17v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="s4z7njbqe"/><path class="c4946-17v"/>`,
		"fallback": "solar:clipboard-type-bold",
	});
}

export default Component;
