import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h3yxesbvm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h3yxesbvm"/>`,
		"fallback": "grommet-icons:book",
	});
}

export default Component;
