import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tt6bjmk9e.css';
import '../../css/e/e77jw6bhj.css';
import '../../css/m/m-0u4sbzm.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tt6bjmk9e"/><path class="e77jw6bhj"/><path class="m-0u4sbzm"/>`,
		"fallback": "material-icon-theme:grain",
	});
}

export default Component;
