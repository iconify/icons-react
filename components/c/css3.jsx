import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yopy-3xrw.css';

const viewBox = {"width":21,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yopy-3xrw"/>`,
		"fallback": "fontisto:css3",
	});
}

export default Component;
