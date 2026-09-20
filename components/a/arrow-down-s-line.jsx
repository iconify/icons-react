import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k3aek7nzy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k3aek7nzy"/>`,
		"fallback": "ri:arrow-down-s-line",
	});
}

export default Component;
