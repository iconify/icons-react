import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e-xao381e.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="e-xao381e"/>`,
		"fallback": "streamline-plump:deepfake-technology-1-solid",
	});
}

export default Component;
