import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cqe-vxb7s.css';
import '../../css/f/f_uwr3bjt.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cqe-vxb7s"/><path class="f_uwr3bjt"/>`,
		"fallback": "vaadin:health-card",
	});
}

export default Component;
