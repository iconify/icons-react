import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v6cjc0bct.css';
import '../../css/q/qao-31brz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v6cjc0bct"/><path class="qao-31brz"/>`,
		"fallback": "material-icon-theme:folder-global",
	});
}

export default Component;
