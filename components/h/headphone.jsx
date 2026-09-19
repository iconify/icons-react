import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dd7cgg0ex.css';

const viewBox = {"width":21,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dd7cgg0ex"/>`,
		"fallback": "fontisto:headphone",
	});
}

export default Component;
