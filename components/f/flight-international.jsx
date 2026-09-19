import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o786i_bpn.css';
import '../../css/w/w_5dyix0s.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o786i_bpn"/><path class="w_5dyix0s"/>`,
		"fallback": "carbon:flight-international",
	});
}

export default Component;
