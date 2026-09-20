import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gok03r4yw.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gok03r4yw"/>`,
		"fallback": "streamline:hierarchy-10-solid",
	});
}

export default Component;
