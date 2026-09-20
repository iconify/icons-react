import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h0ql_sbpf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h0ql_sbpf"/>`,
		"fallback": "selfhst:apache-guacamole-dark",
	});
}

export default Component;
