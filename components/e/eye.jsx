import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i2k121bbm.css';
import '../../css/v/v-w2i5hqd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i2k121bbm"/><path class="v-w2i5hqd"/>`,
		"fallback": "boxicons:eye",
	});
}

export default Component;
