import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ebl5rib_q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ebl5rib_q"/>`,
		"fallback": "withicons:file-check-solid",
	});
}

export default Component;
