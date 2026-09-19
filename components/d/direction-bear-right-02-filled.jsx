import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ggh9rqprt.css';
import '../../css/z/zee_subyv.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ggh9rqprt"/><path class="zee_subyv"/>`,
		"fallback": "carbon:direction-bear-right-02-filled",
	});
}

export default Component;
