import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ttw1qx63j.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ttw1qx63j"/>`,
		"fallback": "fa7-solid:battery-car",
	});
}

export default Component;
