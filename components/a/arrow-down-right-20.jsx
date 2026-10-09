import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p52u5b7hp.css';
import '../../css/l/l9thhtagt.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p52u5b7hp"/><path class="l9thhtagt"/>`,
		"fallback": "energy-icons:arrow-down-right-20",
	});
}

export default Component;
