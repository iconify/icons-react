import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xonpi7osi.css';
import '../../css/b/bj0v28b1r.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xonpi7osi"/><path class="bj0v28b1r"/></g>`,
		"fallback": "material-icon-theme:folder-features",
	});
}

export default Component;
