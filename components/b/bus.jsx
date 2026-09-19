import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h71lwbcrk.css';

const viewBox = {"width":23,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h71lwbcrk"/>`,
		"fallback": "fontisto:bus",
	});
}

export default Component;
