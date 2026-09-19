import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0_61wk_a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0_61wk_a"/>`,
		"fallback": "iconoir:arrow-right",
	});
}

export default Component;
