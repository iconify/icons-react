import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nhfpk-x5d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nhfpk-x5d"/>`,
		"fallback": "ion:code-download-sharp",
	});
}

export default Component;
