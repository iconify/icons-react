import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/k/krhvsnyop.css';
import '../../css/s/s58h4obds.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="krhvsnyop"/><path class="s58h4obds"/></g>`,
		"fallback": "hugeicons:account-setting-02",
	});
}

export default Component;
