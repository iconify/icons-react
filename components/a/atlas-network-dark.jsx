import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s2s7s9b6z.css';
import '../../css/h/hufvzydwy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="s2s7s9b6z"/><path class="hufvzydwy"/>`,
		"fallback": "selfhst:atlas-network-dark",
	});
}

export default Component;
