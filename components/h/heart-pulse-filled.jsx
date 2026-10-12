import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wexh7077m.css';
import '../../css/r/r1d07kbrq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wexh7077m"/><path class="r1d07kbrq"/>`,
		"fallback": "lucide-extended:heart-pulse-filled",
	});
}

export default Component;
