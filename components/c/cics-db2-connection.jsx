import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gxcr60a4i.css';
import '../../css/b/b15_3b_bo.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gxcr60a4i"/><path class="b15_3b_bo"/>`,
		"fallback": "carbon:cics-db2-connection",
	});
}

export default Component;
