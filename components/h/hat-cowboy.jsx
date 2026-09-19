import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z1rr9jblv.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z1rr9jblv"/>`,
		"fallback": "fa6-solid:hat-cowboy",
	});
}

export default Component;
