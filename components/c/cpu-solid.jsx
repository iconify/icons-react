import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ok11i9b6s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ok11i9b6s"/>`,
		"fallback": "withicons:cpu-solid",
	});
}

export default Component;
