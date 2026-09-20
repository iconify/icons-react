import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rsvixqz3a.css';
import '../../css/x/x_688bb3j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rsvixqz3a"/><path class="x_688bb3j"/></g>`,
		"fallback": "lets-icons:folder-add-fill",
	});
}

export default Component;
