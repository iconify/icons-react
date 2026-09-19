import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ok8u8ubdw.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ok8u8ubdw"/>`,
		"fallback": "dashicons:admin-plugins",
	});
}

export default Component;
