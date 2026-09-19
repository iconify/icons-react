import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tfm243b6p.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tfm243b6p"/>`,
		"fallback": "cil:highlighter",
	});
}

export default Component;
