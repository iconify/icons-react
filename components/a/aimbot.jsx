import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/byh9a7b9q.css';
import '../../css/q/qenz11sno.css';
import '../../css/j/ji6z7ccwj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="byh9a7b9q"/><path class="qenz11sno"/><path class="ji6z7ccwj"/>`,
		"fallback": "token:aimbot",
	});
}

export default Component;
