import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tkdmrs04o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tkdmrs04o"/>`,
		"fallback": "boxicons:community",
	});
}

export default Component;
