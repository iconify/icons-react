import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cakywobim.css';
import '../../css/i/iz024ebeq.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cakywobim"/><path clip-rule="evenodd" class="iz024ebeq"/>`,
		"fallback": "lsicon:back-square-filled",
	});
}

export default Component;
