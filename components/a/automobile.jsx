import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ym0pkgb4e.css';

const viewBox = {"width":1024,"height":896};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ym0pkgb4e"/>`,
		"fallback": "whh:automobile",
	});
}

export default Component;
