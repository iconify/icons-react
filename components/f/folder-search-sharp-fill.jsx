import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/s/sr5b0abom.css';
import '../../css/h/hsn6rjy3r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="sr5b0abom"/><path class="hsn6rjy3r"/></g>`,
		"fallback": "keyline-icons:folder-search-sharp-fill",
	});
}

export default Component;
