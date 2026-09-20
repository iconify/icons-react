import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sizck9b5h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sizck9b5h"/>`,
		"fallback": "tabler:folder-open-filled",
	});
}

export default Component;
