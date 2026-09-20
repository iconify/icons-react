import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zupls5bsz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zupls5bsz"/>`,
		"fallback": "thesvg:hbo-max",
	});
}

export default Component;
