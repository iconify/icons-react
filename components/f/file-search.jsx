import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zi3yp8i0r.css';
import '../../css/w/wjbqcl4jb.css';
import '../../css/g/gpa4p37oc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zi3yp8i0r"/><path class="wjbqcl4jb"/><path class="gpa4p37oc"/></g>`,
		"fallback": "andrsrxn:file-search",
	});
}

export default Component;
