import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y6veld26c.css';
import '../../css/u/u_6gs2b2x.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y6veld26c"/><path class="u_6gs2b2x"/>`,
		"fallback": "energy-icons:dosimeter-20",
	});
}

export default Component;
