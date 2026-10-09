import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/opn24tbwg.css';
import '../../css/o/ov--w3k6t.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="opn24tbwg"/><path class="ov--w3k6t"/>`,
		"fallback": "energy-icons:energy-price-48-bold",
	});
}

export default Component;
