import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c7l54zb3f.css';
import '../../css/d/d_z7b1b5x.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c7l54zb3f"/><path class="d_z7b1b5x"/>`,
		"fallback": "material-icon-theme:folder-husky",
	});
}

export default Component;
