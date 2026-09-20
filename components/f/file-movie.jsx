import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oe3oz-bur.css';
import '../../css/j/jzslicbuh.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oe3oz-bur"/><path class="jzslicbuh"/>`,
		"fallback": "vaadin:file-movie",
	});
}

export default Component;
