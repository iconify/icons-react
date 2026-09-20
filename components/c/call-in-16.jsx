import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wisis3x7u.css';
import '../../css/m/mprc9wbfv.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wisis3x7u"/><path class="mprc9wbfv"/>`,
		"fallback": "qlementine-icons:call-in-16",
	});
}

export default Component;
