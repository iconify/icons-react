import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bu2_0m1vg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bu2_0m1vg"/>`,
		"fallback": "solar:donut-bitten-outline",
	});
}

export default Component;
