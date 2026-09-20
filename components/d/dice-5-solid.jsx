import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qg3k_nb0m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qg3k_nb0m"/>`,
		"fallback": "nrk:dice-5-solid",
	});
}

export default Component;
