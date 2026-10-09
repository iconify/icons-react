import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i_hiasb3j.css';
import '../../css/z/zme2kfuvy.css';
import '../../css/j/joilwmbfp.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i_hiasb3j"/><path class="zme2kfuvy"/><path class="joilwmbfp"/>`,
		"fallback": "energy-icons:cement-plant-20-bold",
	});
}

export default Component;
