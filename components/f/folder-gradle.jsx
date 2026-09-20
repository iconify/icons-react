import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v7-c3zb9h.css';
import '../../css/m/mexy6lbof.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v7-c3zb9h"/><path class="mexy6lbof"/>`,
		"fallback": "material-icon-theme:folder-gradle",
	});
}

export default Component;
