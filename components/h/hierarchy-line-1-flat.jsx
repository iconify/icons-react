import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x3f8h8t0v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="x3f8h8t0v"/>`,
		"fallback": "streamline-sharp-color:hierarchy-line-1-flat",
	});
}

export default Component;
