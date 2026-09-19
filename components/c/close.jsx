import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/li6r0m7yr.css';

const viewBox = {"width":304,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="li6r0m7yr"/>`,
		"fallback": "zmdi:close",
	});
}

export default Component;
