import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/orkf8rbgh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="orkf8rbgh"/>`,
		"fallback": "nrk:forward-expressive",
	});
}

export default Component;
