import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ovyu2kbcj.css';

const viewBox = {"width":49,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ovyu2kbcj"/>`,
		"fallback": "icon-park-outline:dome-light",
	});
}

export default Component;
