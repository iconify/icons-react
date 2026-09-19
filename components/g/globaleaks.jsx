import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/albroqbnv.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="albroqbnv"/>`,
		"fallback": "fa7-brands:globaleaks",
	});
}

export default Component;
