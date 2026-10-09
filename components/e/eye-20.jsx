import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y04gfnbxb.css';
import '../../css/t/t170-qrdh.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y04gfnbxb"/><path class="t170-qrdh"/>`,
		"fallback": "energy-icons:eye-20",
	});
}

export default Component;
