import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mmj2bc85f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mmj2bc85f"/>`,
		"fallback": "coolicons:folder-minus-corner-fill-round",
	});
}

export default Component;
