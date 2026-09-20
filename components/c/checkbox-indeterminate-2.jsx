import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jwgv9yixq.css';
import '../../css/j/j57c36ipr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="jwgv9yixq"/><path class="j57c36ipr"/></g>`,
		"fallback": "proicons:checkbox-indeterminate-2",
	});
}

export default Component;
