import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x06e9_b2c.css';
import '../../css/x/xg13r0bpx.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x06e9_b2c"/><path class="xg13r0bpx"/>`,
		"fallback": "carbon:apple-dash",
	});
}

export default Component;
