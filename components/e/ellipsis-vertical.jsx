import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ol7chu8pc.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ol7chu8pc"/>`,
		"fallback": "at-icons:ellipsis-vertical",
	});
}

export default Component;
