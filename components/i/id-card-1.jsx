import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tyewzpp7k.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tyewzpp7k"/>`,
		"fallback": "subway:id-card-1",
	});
}

export default Component;
