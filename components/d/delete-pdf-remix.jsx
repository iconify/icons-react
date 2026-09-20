import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gwsl0ug_u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gwsl0ug_u"/>`,
		"fallback": "streamline-sharp:delete-pdf-remix",
	});
}

export default Component;
