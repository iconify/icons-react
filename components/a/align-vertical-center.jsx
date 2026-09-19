import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ld5934bvn.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ld5934bvn"/>`,
		"fallback": "carbon:align-vertical-center",
	});
}

export default Component;
