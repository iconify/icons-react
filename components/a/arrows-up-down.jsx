import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qb7k1eeah.css';

const viewBox = {"width":320,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qb7k1eeah"/>`,
		"fallback": "fa6-solid:arrows-up-down",
	});
}

export default Component;
