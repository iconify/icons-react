import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bj9z2dhot.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bj9z2dhot"/>`,
		"fallback": "fa6-solid:bolt-lightning",
	});
}

export default Component;
