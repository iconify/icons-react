import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rbgnj7b2n.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rbgnj7b2n"/>`,
		"fallback": "streamline-block:content-folder",
	});
}

export default Component;
