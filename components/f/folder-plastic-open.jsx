import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xv8-lrn5y.css';
import '../../css/h/hogxnibkc.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xv8-lrn5y"/><path class="hogxnibkc"/>`,
		"fallback": "material-icon-theme:folder-plastic-open",
	});
}

export default Component;
