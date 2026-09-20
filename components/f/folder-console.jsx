import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n36vjab5v.css';
import '../../css/a/ad8jx5snz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n36vjab5v"/><path class="ad8jx5snz"/>`,
		"fallback": "material-icon-theme:folder-console",
	});
}

export default Component;
