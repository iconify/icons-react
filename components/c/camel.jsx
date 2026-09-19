import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bmy4l5bds.css';

const viewBox = {"width":2016,"height":1664};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bmy4l5bds"/>`,
		"fallback": "vs:camel",
	});
}

export default Component;
