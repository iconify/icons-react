import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w01dflzvf.css';
import '../../css/x/xiawuebbj.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w01dflzvf"/><path class="xiawuebbj"/>`,
		"fallback": "energy-icons:chart-duration-curve-20-bold",
	});
}

export default Component;
