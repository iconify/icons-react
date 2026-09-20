import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0m25c.css';
import '../../css/t/t6cvhn.css';
import '../../css/q/q3l5np.css';
import '../../css/s/so-from-20.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0m25c t6cvhn"/><path class="a0m25c q3l5np"/>`,
		"fallback": "line-md:arrow-right",
	});
}

export default Component;
