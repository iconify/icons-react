import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jyemvd5bc.css';
import '../../css/k/k5155bffp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jyemvd5bc"/><path class="k5155bffp"/>`,
		"fallback": "selfhst:eonvelope-light",
	});
}

export default Component;
