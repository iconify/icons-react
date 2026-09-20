import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l6ptxrgvy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l6ptxrgvy"/>`,
		"fallback": "subway:equalizer-1",
	});
}

export default Component;
