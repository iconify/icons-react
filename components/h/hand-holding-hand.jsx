import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lxvidob-b.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lxvidob-b"/>`,
		"fallback": "fa6-solid:hand-holding-hand",
	});
}

export default Component;
