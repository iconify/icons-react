import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fdjuwtb7o.css';
import '../../css/r/r-t90pbtt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fdjuwtb7o"/><path class="r-t90pbtt"/>`,
		"fallback": "tdesign:face-retouching-filled",
	});
}

export default Component;
