import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jv8it5a_b.css';
import '../../css/g/g82lygpra.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jv8it5a_b"/><path class="g82lygpra"/>`,
		"fallback": "boxicons:arrow-out-up-left-stroke-circle-filled",
	});
}

export default Component;
