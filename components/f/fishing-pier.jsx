import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t7i7tqbhm.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t7i7tqbhm"/>`,
		"fallback": "temaki:fishing-pier",
	});
}

export default Component;
