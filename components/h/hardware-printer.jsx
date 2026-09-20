import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/spf_7nb8t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="spf_7nb8t"/>`,
		"fallback": "nrk:hardware-printer",
	});
}

export default Component;
