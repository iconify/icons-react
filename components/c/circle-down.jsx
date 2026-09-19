import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pwuk1ybsw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pwuk1ybsw"/>`,
		"fallback": "fa6-regular:circle-down",
	});
}

export default Component;
