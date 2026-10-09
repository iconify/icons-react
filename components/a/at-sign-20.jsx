import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t170-qrdh.css';
import '../../css/u/uto33fc8y.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t170-qrdh"/><path class="uto33fc8y"/>`,
		"fallback": "energy-icons:at-sign-20",
	});
}

export default Component;
