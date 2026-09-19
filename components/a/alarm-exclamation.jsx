import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rjpmnbata.css';
import '../../css/k/ku47_bc8q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rjpmnbata"/><path class="ku47_bc8q"/>`,
		"fallback": "boxicons:alarm-exclamation",
	});
}

export default Component;
