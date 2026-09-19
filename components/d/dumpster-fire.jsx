import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ukdg_s_uj.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ukdg_s_uj"/>`,
		"fallback": "fa6-solid:dumpster-fire",
	});
}

export default Component;
