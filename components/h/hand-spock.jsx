import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vu_dgjbin.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vu_dgjbin"/>`,
		"fallback": "fa7-regular:hand-spock",
	});
}

export default Component;
