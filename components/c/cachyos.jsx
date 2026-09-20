import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zz44edbww.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zz44edbww"/>`,
		"fallback": "thesvg-color:cachyos",
	});
}

export default Component;
