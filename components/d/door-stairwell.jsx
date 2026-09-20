import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/o2nihmbmv.css';
import '../../css/s/st1umwzvm.css';
import '../../css/i/ittsvtybw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="o2nihmbmv"/><path class="st1umwzvm"/><path class="ittsvtybw"/></g>`,
		"fallback": "lucide:door-stairwell",
	});
}

export default Component;
