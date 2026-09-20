import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/soy-_013u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="soy-_013u"/>`,
		"fallback": "keyline-icons:expand-dashed-up-left",
	});
}

export default Component;
