import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z21hsdbde.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z21hsdbde"/>`,
		"fallback": "selfhst:enphase-light",
	});
}

export default Component;
