import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fugvu9n9d.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fugvu9n9d"/>`,
		"fallback": "bi:file-check-fill",
	});
}

export default Component;
