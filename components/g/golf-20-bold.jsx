import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lwpjg0bhd.css';
import '../../css/c/c_dqrlbfr.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lwpjg0bhd"/><path class="c_dqrlbfr"/>`,
		"fallback": "energy-icons:golf-20-bold",
	});
}

export default Component;
