import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ersnx-vyq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ersnx-vyq"/>`,
		"fallback": "withicons:file-lock-solid",
	});
}

export default Component;
