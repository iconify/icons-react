import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fkd5oxl6c.css';
import '../../css/b/bc_ody0we.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fkd5oxl6c"/><path class="bc_ody0we"/>`,
		"fallback": "vaadin:arrow-circle-right-o",
	});
}

export default Component;
