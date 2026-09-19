import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q6sel__is.css';

const viewBox = {"width":438,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q6sel__is"/>`,
		"fallback": "file-icons:dragula",
	});
}

export default Component;
