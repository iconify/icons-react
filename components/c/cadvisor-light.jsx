import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bgy_ef_3t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bgy_ef_3t"/>`,
		"fallback": "selfhst:cadvisor-light",
	});
}

export default Component;
