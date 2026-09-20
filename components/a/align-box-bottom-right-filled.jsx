import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cgzt6up8w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cgzt6up8w"/>`,
		"fallback": "tabler:align-box-bottom-right-filled",
	});
}

export default Component;
