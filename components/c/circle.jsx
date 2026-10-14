import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hre7pb13f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hre7pb13f"/>`,
		"fallback": "matita:circle",
	});
}

export default Component;
