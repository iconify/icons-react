import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xgsw6jy6p.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xgsw6jy6p"/>`,
		"fallback": "fa6-solid:arrows-spin",
	});
}

export default Component;
