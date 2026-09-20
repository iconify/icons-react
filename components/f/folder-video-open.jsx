import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xv8-lrn5y.css';
import '../../css/r/rh3qbgbhi.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xv8-lrn5y"/><path class="rh3qbgbhi"/>`,
		"fallback": "material-icon-theme:folder-video-open",
	});
}

export default Component;
