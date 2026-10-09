import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r_d-chbfv.css';
import '../../css/p/p48t35bio.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r_d-chbfv"/><path class="p48t35bio"/>`,
		"fallback": "energy-icons:connector-type2-20",
	});
}

export default Component;
