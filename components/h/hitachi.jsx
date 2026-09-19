import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zx_p0ab0a.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zx_p0ab0a"/>`,
		"fallback": "cib:hitachi",
	});
}

export default Component;
