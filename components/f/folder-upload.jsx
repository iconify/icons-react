import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u9ev8c_0g.css';
import '../../css/j/jfo5ug-pm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="duoicon-secondary-layer u9ev8c_0g"/><path class="duoicon-primary-layer jfo5ug-pm"/>`,
		"fallback": "duo-icons:folder-upload",
	});
}

export default Component;
