import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h9_amsz7a.css';
import '../../css/z/z63mtn1lx.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h9_amsz7a"/><path class="z63mtn1lx"/>`,
		"fallback": "material-icon-theme:folder-import-open",
	});
}

export default Component;
