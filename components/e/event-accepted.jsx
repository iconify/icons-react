import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bpwzmcb_l.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bpwzmcb_l"/>`,
		"fallback": "fluent-mdl2:event-accepted",
	});
}

export default Component;
