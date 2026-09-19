import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i_ingbcer.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i_ingbcer"/>`,
		"fallback": "fa7-brands:gitter",
	});
}

export default Component;
