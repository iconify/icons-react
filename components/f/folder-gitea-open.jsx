import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hp948_bll.css';
import '../../css/i/ib8s1i8wi.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hp948_bll"/><path class="ib8s1i8wi"/>`,
		"fallback": "material-icon-theme:folder-gitea-open",
	});
}

export default Component;
