import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vfj4zib1d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vfj4zib1d"/>`,
		"fallback": "reicon:document-text2-filled",
	});
}

export default Component;
