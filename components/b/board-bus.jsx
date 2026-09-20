import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tisl7lofk.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tisl7lofk"/>`,
		"fallback": "temaki:board-bus",
	});
}

export default Component;
