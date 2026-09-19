import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bs721ibcs.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bs721ibcs"/>`,
		"fallback": "fa7-regular:hand-point-up",
	});
}

export default Component;
