import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rnisfbc2x.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rnisfbc2x"/>`,
		"fallback": "fa7-regular:face-grin-hearts",
	});
}

export default Component;
