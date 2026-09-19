import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r8a4y2bck.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r8a4y2bck"/>`,
		"fallback": "gravity-ui:arrow-down-left",
	});
}

export default Component;
