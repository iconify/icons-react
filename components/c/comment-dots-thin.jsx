import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/b/br4irwbvw.css';
import '../../css/r/r-ngfy_wa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="br4irwbvw"/><path class="r-ngfy_wa"/></g>`,
		"fallback": "iconamoon:comment-dots-thin",
	});
}

export default Component;
