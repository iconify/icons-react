import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/osf4fjcye.css';

const viewBox = {"width":320,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="osf4fjcye"/>`,
		"fallback": "fa6-solid:bitcoin-sign",
	});
}

export default Component;
