import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/edz5fexnf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="edz5fexnf"/>`,
		"fallback": "streamline-sharp:edit-pdf-solid",
	});
}

export default Component;
