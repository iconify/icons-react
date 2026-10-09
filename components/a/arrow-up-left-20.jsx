import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hehatfcph.css';
import '../../css/a/ayea-y_zd.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hehatfcph"/><path class="ayea-y_zd"/>`,
		"fallback": "energy-icons:arrow-up-left-20",
	});
}

export default Component;
