import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b2ctyqcpf.css';
import '../../css/t/trdxx3lxf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b2ctyqcpf"/><path class="trdxx3lxf"/>`,
		"fallback": "selfhst:frappe-crm",
	});
}

export default Component;
