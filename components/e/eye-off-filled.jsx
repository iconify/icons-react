import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/skc1_tbgq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="skc1_tbgq"/>`,
		"fallback": "griddy-icons:eye-off-filled",
	});
}

export default Component;
