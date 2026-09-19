import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rbt64hbhh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rbt64hbhh"/>`,
		"fallback": "ion:folder-open-sharp",
	});
}

export default Component;
