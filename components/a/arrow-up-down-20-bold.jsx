import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9vddv0no.css';
import '../../css/c/c919zyb1p.css';
import '../../css/d/dnisdto1x.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y9vddv0no"/><path class="c919zyb1p"/><path class="dnisdto1x"/>`,
		"fallback": "energy-icons:arrow-up-down-20-bold",
	});
}

export default Component;
