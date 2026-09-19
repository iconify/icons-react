import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tdhl94coo.css';
import '../../css/l/lzvsylpnr.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tdhl94coo"/><path class="lzvsylpnr"/>`,
		"fallback": "carbon:identification",
	});
}

export default Component;
