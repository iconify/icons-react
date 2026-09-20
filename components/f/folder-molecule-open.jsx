import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xv8-lrn5y.css';
import '../../css/d/dt86ds9dv.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xv8-lrn5y"/><path class="dt86ds9dv"/>`,
		"fallback": "material-icon-theme:folder-molecule-open",
	});
}

export default Component;
