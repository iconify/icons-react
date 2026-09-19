import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hay_dtbyr.css';

const viewBox = {"width":20,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hay_dtbyr"/>`,
		"fallback": "garden:file-pdf-26",
	});
}

export default Component;
