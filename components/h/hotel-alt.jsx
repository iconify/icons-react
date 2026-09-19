import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i5l4uj3dn.css';
import '../../css/q/q-lo6_bbg.css';

const viewBox = {"width":28,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i5l4uj3dn"/><path class="q-lo6_bbg"/>`,
		"fallback": "fontisto:hotel-alt",
	});
}

export default Component;
