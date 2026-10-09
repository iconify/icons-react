import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ppl_-uorl.css';
import '../../css/u/uso6srbxz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ppl_-uorl"/><path class="uso6srbxz"/>`,
		"fallback": "energy-icons:bee-48",
	});
}

export default Component;
