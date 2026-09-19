import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2-_juz8j.css';
import '../../css/t/ty71tpvsl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k2-_juz8j"/><path class="ty71tpvsl"/>`,
		"fallback": "cil:chevron-double-up",
	});
}

export default Component;
