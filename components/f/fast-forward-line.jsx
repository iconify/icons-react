import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hn0pp-bpg.css';
import '../../css/v/v3kgvknic.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hn0pp-bpg"/><path class="v3kgvknic"/>`,
		"fallback": "mingcute:fast-forward-line",
	});
}

export default Component;
