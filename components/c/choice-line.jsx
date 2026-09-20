import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/scf9pfbdp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="scf9pfbdp"/>`,
		"fallback": "mingcute:choice-line",
	});
}

export default Component;
