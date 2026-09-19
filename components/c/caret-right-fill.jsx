import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x9n2ybc0f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x9n2ybc0f"/>`,
		"fallback": "grommet-icons:caret-right-fill",
	});
}

export default Component;
