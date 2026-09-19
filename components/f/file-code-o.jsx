import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fp7x4_pfc.css';

const viewBox = {"width":1536,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fp7x4_pfc"/>`,
		"fallback": "fa:file-code-o",
	});
}

export default Component;
