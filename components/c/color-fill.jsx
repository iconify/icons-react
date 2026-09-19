import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zrcqm7bts.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zrcqm7bts"/>`,
		"fallback": "cil:color-fill",
	});
}

export default Component;
