import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a9c07i3qc.css';
import '../../css/c/c51f_wf4g.css';
import '../../css/m/mm5pgybwd.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a9c07i3qc"/><path class="c51f_wf4g"/><path class="mm5pgybwd"/>`,
		"fallback": "energy-icons:factory-20-bold",
	});
}

export default Component;
