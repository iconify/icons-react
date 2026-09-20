import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xfkgk1l5g.css';
import '../../css/u/ugxf3ybrs.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xfkgk1l5g"/><path class="ugxf3ybrs"/>`,
		"fallback": "openmoji:anchor",
	});
}

export default Component;
