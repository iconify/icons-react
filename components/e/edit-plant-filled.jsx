import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fxkl48b0c.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fxkl48b0c"/>`,
		"fallback": "ix:edit-plant-filled",
	});
}

export default Component;
