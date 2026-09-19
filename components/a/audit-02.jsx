import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/nz3qfzbna.css';
import '../../css/k/k-e9vg24e.css';
import '../../css/j/jl9f6f4iq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="nz3qfzbna"/><path class="k-e9vg24e"/><path class="jl9f6f4iq"/></g>`,
		"fallback": "hugeicons:audit-02",
	});
}

export default Component;
