import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p-ji6ybfs.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p-ji6ybfs"/>`,
		"fallback": "gravity-ui:crown-diamond",
	});
}

export default Component;
