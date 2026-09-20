import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mzpaq-eyc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mzpaq-eyc"/>`,
		"fallback": "thesvg-color:coderwall",
	});
}

export default Component;
