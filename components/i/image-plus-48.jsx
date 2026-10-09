import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ntv6zhbei.css';
import '../../css/w/w5p1slozp.css';
import '../../css/b/bbxn-dufo.css';
import '../../css/k/kem81wb3i.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ntv6zhbei"/><path class="w5p1slozp"/><path class="bbxn-dufo"/><path class="kem81wb3i"/>`,
		"fallback": "energy-icons:image-plus-48",
	});
}

export default Component;
