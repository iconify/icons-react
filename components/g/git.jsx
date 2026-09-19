import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a23t4i8qj.css';

const viewBox = {"width":22,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a23t4i8qj"/>`,
		"fallback": "fontisto:git",
	});
}

export default Component;
