import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qapg4nbep.css';
import '../../css/t/ttfe232er.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qapg4nbep"/><path class="ttfe232er"/>`,
		"fallback": "token:carbon",
	});
}

export default Component;
