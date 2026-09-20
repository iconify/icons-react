import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o8u43xb9m.css';
import '../../css/c/co3iw4m_d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o8u43xb9m"/><path class="co3iw4m_d"/>`,
		"fallback": "selfhst:centos-dark",
	});
}

export default Component;
