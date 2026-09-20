import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eddf4cbpl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eddf4cbpl"/>`,
		"fallback": "reicon:file-content-filled",
	});
}

export default Component;
