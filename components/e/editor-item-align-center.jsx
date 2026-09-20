import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rfybttfyf.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rfybttfyf"/>`,
		"fallback": "oui:editor-item-align-center",
	});
}

export default Component;
