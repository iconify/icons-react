import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/te48i79xt.css';
import '../../css/s/syysw3b_f.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="te48i79xt"/><path class="syysw3b_f"/>`,
		"fallback": "energy-icons:crucible-48",
	});
}

export default Component;
