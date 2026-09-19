import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pmp9btkqa.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pmp9btkqa"/>`,
		"fallback": "ion:arrow-up-circle-sharp",
	});
}

export default Component;
