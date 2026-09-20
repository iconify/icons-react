import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ifuc-ccmq.css';
import '../../css/q/qhzz97u4n.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ifuc-ccmq"/><path class="qhzz97u4n"/>`,
		"fallback": "teenyicons:envelope-open-solid",
	});
}

export default Component;
