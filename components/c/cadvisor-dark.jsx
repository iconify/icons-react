import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tliz7ac4m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tliz7ac4m"/>`,
		"fallback": "selfhst:cadvisor-dark",
	});
}

export default Component;
