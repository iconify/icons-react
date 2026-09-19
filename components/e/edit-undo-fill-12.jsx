import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mgygprbzp.css';
import '../../css/n/nkbsn0brg.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mgygprbzp"/><path class="nkbsn0brg"/>`,
		"fallback": "garden:edit-undo-fill-12",
	});
}

export default Component;
