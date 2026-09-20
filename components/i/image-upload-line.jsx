import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uwmj_e-pi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uwmj_e-pi"/>`,
		"fallback": "ri:image-upload-line",
	});
}

export default Component;
