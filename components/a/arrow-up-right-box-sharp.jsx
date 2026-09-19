import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xt4r-82jz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xt4r-82jz"/>`,
		"fallback": "ion:arrow-up-right-box-sharp",
	});
}

export default Component;
