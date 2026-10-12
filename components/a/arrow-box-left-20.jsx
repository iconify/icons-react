import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s5sc-_b4d.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s5sc-_b4d"/>`,
		"fallback": "garden:arrow-box-left-20",
	});
}

export default Component;
