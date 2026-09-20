import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v6cjc0bct.css';
import '../../css/x/xb829869a.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v6cjc0bct"/><path class="xb829869a"/>`,
		"fallback": "material-icon-theme:folder-terraform",
	});
}

export default Component;
