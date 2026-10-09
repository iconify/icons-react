import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l1_q84b1c.css';
import '../../css/f/fzhucbcoy.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l1_q84b1c"/><path class="fzhucbcoy"/>`,
		"fallback": "energy-icons:bowling-20-bold",
	});
}

export default Component;
