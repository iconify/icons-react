import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c0oa-qzdz.css';
import '../../css/f/fljlq88df.css';
import '../../css/s/sgl4b6bpi.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c0oa-qzdz"/><path class="fljlq88df"/><path class="sgl4b6bpi"/>`,
		"fallback": "energy-icons:hydrogen-20-bold",
	});
}

export default Component;
