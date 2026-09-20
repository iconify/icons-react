import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/ze6ucbb7k.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ze6ucbb7k"/>`,
		"fallback": "map:hindu-temple",
	});
}

export default Component;
