import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/u/us8hqcc-d.css';
import '../../css/f/fhjah2b8s.css';
import '../../css/b/b8opj0i7z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="us8hqcc-d"/><path class="fhjah2b8s"/><path class="b8opj0i7z"/></g>`,
		"fallback": "iconamoon:briefcase-thin",
	});
}

export default Component;
