import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jh0zkx8bv.css';
import '../../css/y/yud54w-4w.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jh0zkx8bv"/><path class="yud54w-4w"/>`,
		"fallback": "material-icon-theme:folder-r-open",
	});
}

export default Component;
