import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ciwhunbto.css';
import '../../css/s/sdgejvbhx.css';

const viewBox = {"width":25,"height":25};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ciwhunbto"/><path class="sdgejvbhx"/>`,
		"fallback": "lineicons:exit",
	});
}

export default Component;
