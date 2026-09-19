import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fae0gccdw.css';

const viewBox = {"width":320,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fae0gccdw"/>`,
		"fallback": "fa6-solid:5",
	});
}

export default Component;
