import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt1vuebfg.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dt1vuebfg"/>`,
		"fallback": "fa6-solid:bed",
	});
}

export default Component;
