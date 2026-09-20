import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/thwih6b_f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="thwih6b_f"/>`,
		"fallback": "selfhst:gns3-light",
	});
}

export default Component;
