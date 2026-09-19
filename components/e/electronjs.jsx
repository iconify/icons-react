import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pn0-sbcys.css';

const viewBox = {"width":22,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pn0-sbcys"/>`,
		"fallback": "fontisto:electronjs",
	});
}

export default Component;
