import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y8rt5bbrs.css';
import '../../css/a/ad8jx5snz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y8rt5bbrs"/><path class="ad8jx5snz"/>`,
		"fallback": "material-icon-theme:folder-console-open",
	});
}

export default Component;
