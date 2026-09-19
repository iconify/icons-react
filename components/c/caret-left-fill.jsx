import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zu9b4b9-d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zu9b4b9-d"/>`,
		"fallback": "grommet-icons:caret-left-fill",
	});
}

export default Component;
