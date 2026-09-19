import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qa3hvoqog.css';

const viewBox = {"width":20,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qa3hvoqog"/>`,
		"fallback": "fontisto:file",
	});
}

export default Component;
