import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/spajzybyt.css';
import '../../css/x/x9f5z-bmj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="spajzybyt"/><path class="x9f5z-bmj"/>`,
		"fallback": "material-icon-theme:folder-base",
	});
}

export default Component;
