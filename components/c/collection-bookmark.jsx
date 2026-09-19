import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iagiy7bpg.css';

const viewBox = {"width":432,"height":432};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iagiy7bpg"/>`,
		"fallback": "zmdi:collection-bookmark",
	});
}

export default Component;
