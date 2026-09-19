import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qfmbfrbpt.css';
import '../../css/g/ga2dqzb8j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qfmbfrbpt"/><path class="ga2dqzb8j"/>`,
		"fallback": "boxicons:bread",
	});
}

export default Component;
