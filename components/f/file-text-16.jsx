import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pmdn2ybsd.css';
import '../../css/r/rnvgnfbbf.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pmdn2ybsd"/><path clip-rule="evenodd" class="rnvgnfbbf"/>`,
		"fallback": "qlementine-icons:file-text-16",
	});
}

export default Component;
