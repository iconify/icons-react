import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m-_0e_e0e.css';
import '../../css/y/yf1-nhwqt.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m-_0e_e0e"/><path class="yf1-nhwqt"/>`,
		"fallback": "vaadin:file-remove",
	});
}

export default Component;
