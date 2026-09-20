import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aiap8ebun.css';
import '../../css/r/r_hb2znwh.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aiap8ebun"/><path class="r_hb2znwh"/>`,
		"fallback": "material-icon-theme:folder-sublime",
	});
}

export default Component;
