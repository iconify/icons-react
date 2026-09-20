import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ind_uwmve.css';
import '../../css/y/y5z6dwezu.css';
import '../../css/g/g2lri_b3j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ind_uwmve"/><path class="y5z6dwezu"/><path class="g2lri_b3j"/>`,
		"fallback": "selfhst:google-keep",
	});
}

export default Component;
