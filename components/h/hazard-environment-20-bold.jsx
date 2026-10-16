import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pcia1ds6l.css';
import '../../css/i/istrjj4et.css';
import '../../css/y/y06ocpbjt.css';
import '../../css/p/pw9j91bwy.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pcia1ds6l"/><path class="istrjj4et"/><path class="y06ocpbjt"/><path class="pw9j91bwy"/>`,
		"fallback": "energy-icons:hazard-environment-20-bold",
	});
}

export default Component;
