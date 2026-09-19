import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u1712w5xs.css';
import '../../css/d/dbl1jubiy.css';
import '../../css/i/iq0du-zgw.css';
import '../../css/t/tsbi9cmqg.css';
import '../../css/i/ibmjo0bha.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u1712w5xs"/><path class="dbl1jubiy"/><path class="iq0du-zgw"/><path class="tsbi9cmqg"/><path class="ibmjo0bha"/>`,
		"fallback": "flat-color-icons:feedback",
	});
}

export default Component;
