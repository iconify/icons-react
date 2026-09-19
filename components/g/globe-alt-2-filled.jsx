import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/afgl2wb3a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="afgl2wb3a"/>`,
		"fallback": "boxicons:globe-alt-2-filled",
	});
}

export default Component;
