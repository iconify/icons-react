import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mqg5zacjg.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mqg5zacjg"/>`,
		"fallback": "fa7-solid:calculator",
	});
}

export default Component;
