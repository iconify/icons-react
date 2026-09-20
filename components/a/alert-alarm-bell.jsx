import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/co17elbuu.css';
import '../../css/o/oh7_w2b4s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="co17elbuu"/><path class="oh7_w2b4s"/>`,
		"fallback": "streamline-freehand:alert-alarm-bell",
	});
}

export default Component;
