import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t94987b6c.css';
import '../../css/f/f5bqv3-2b.css';
import '../../css/k/kem81wb3i.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t94987b6c"/><path class="f5bqv3-2b"/><path class="kem81wb3i"/>`,
		"fallback": "energy-icons:bookmark-minus-48",
	});
}

export default Component;
