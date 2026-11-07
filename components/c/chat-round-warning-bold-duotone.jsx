import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n0jc9qlwi.css';
import '../../css/q/qsm1dmd4a.css';
import '../../css/z/z04quez4q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n0jc9qlwi"/><path class="qsm1dmd4a"/><path class="z04quez4q"/>`,
		"fallback": "solar:chat-round-warning-bold-duotone",
	});
}

export default Component;
