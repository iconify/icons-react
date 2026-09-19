import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t0siyqbzs.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t0siyqbzs"/>`,
		"fallback": "f7:arrow-uturn-left-square",
	});
}

export default Component;
