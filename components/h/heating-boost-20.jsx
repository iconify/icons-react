import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eiojdmbqv.css';
import '../../css/q/q24vj1lah.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eiojdmbqv"/><path class="q24vj1lah"/>`,
		"fallback": "energy-icons:heating-boost-20",
	});
}

export default Component;
