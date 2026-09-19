import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j_u1exb-p.css';
import '../../css/h/hbx_zybzm.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j_u1exb-p"/><path class="hbx_zybzm"/>`,
		"fallback": "carbon:ibm-security-services",
	});
}

export default Component;
