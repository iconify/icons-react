import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x4awwsbla.css';
import '../../css/f/f5bqv3-2b.css';
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
		"content": `<path class="x4awwsbla"/><path class="f5bqv3-2b"/><path class="bbxn-dufo"/><path class="kem81wb3i"/>`,
		"fallback": "energy-icons:heart-plus-48",
	});
}

export default Component;
