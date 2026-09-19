import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u-0xmhb_n.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u-0xmhb_n"/>`,
		"fallback": "cib:gitter",
	});
}

export default Component;
