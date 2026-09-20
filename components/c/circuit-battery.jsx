import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kvu_a7hvw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kvu_a7hvw"/>`,
		"fallback": "tabler:circuit-battery",
	});
}

export default Component;
