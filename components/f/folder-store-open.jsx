import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vi9dt8sqd.css';
import '../../css/m/mrww_9xen.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vi9dt8sqd"/><path class="mrww_9xen"/>`,
		"fallback": "material-icon-theme:folder-store-open",
	});
}

export default Component;
