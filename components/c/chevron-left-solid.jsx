import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d4n5v94id.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="d4n5v94id"/>`,
		"fallback": "heroicons:chevron-left-solid",
	});
}

export default Component;
