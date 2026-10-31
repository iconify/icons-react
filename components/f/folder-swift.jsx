import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uvwqut9aq.css';
import '../../css/g/gooa6pv_r.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uvwqut9aq"/><path class="gooa6pv_r"/>`,
		"fallback": "material-icon-theme:folder-swift",
	});
}

export default Component;
