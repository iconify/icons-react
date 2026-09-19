import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n9n72kbnl.css';

const viewBox = {"width":1088,"height":1664};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n9n72kbnl"/>`,
		"fallback": "fa:chevron-left",
	});
}

export default Component;
