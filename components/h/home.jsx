import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pdzws5_nn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pdzws5_nn"/>`,
		"fallback": "iconoir:home",
	});
}

export default Component;
