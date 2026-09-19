import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/si7_7aceq.css';

const viewBox = {"width":496,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="si7_7aceq"/>`,
		"fallback": "fa-brands:galactic-republic",
	});
}

export default Component;
