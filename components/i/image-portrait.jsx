import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qfcb48v_a.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qfcb48v_a"/>`,
		"fallback": "fa6-solid:image-portrait",
	});
}

export default Component;
