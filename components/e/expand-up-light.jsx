import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sdfgdtc2n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sdfgdtc2n"/>`,
		"fallback": "lets-icons:expand-up-light",
	});
}

export default Component;
