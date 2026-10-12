import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r_1_g2krb.css';
import '../../css/o/o-tazueek.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r_1_g2krb"/><path class="o-tazueek"/>`,
		"fallback": "energy-icons:cow-20",
	});
}

export default Component;
