import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v88ye4bop.css';
import '../../css/r/r8ygzbbjv.css';
import '../../css/y/yfoxxnbix.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v88ye4bop"/><path class="r8ygzbbjv"/><path class="yfoxxnbix"/>`,
		"fallback": "energy-icons:gravity-base-20-bold",
	});
}

export default Component;
