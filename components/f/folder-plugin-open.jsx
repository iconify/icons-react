import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u8r7eptda.css';
import '../../css/y/ykmbv_xzn.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u8r7eptda"/><path class="ykmbv_xzn"/>`,
		"fallback": "material-icon-theme:folder-plugin-open",
	});
}

export default Component;
