import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lrkvb8gxl.css';
import '../../css/p/pk3sogrrs.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lrkvb8gxl"/><path class="pk3sogrrs"/>`,
		"fallback": "octicon:codescan-16",
	});
}

export default Component;
