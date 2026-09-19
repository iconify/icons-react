import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xhvt2-bpv.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xhvt2-bpv"/>`,
		"fallback": "glyphs:globe-earth-outline",
	});
}

export default Component;
