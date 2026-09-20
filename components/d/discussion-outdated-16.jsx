import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dds4u8xcs.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dds4u8xcs"/>`,
		"fallback": "octicon:discussion-outdated-16",
	});
}

export default Component;
