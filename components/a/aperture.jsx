import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mdvs7m46w.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mdvs7m46w"/>`,
		"fallback": "et:aperture",
	});
}

export default Component;
