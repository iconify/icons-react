import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mnkyh1udx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mnkyh1udx"/>`,
		"fallback": "selfhst:at-t-dark",
	});
}

export default Component;
