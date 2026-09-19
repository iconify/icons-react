import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s50rjobvm.css';

const viewBox = {"width":21,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s50rjobvm"/>`,
		"fallback": "fontisto:envato",
	});
}

export default Component;
