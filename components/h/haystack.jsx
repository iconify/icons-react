import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pht4l3yoa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pht4l3yoa"/>`,
		"fallback": "thesvg:haystack",
	});
}

export default Component;
