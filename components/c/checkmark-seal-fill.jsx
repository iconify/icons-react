import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xi1la0bde.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xi1la0bde"/>`,
		"fallback": "f7:checkmark-seal-fill",
	});
}

export default Component;
