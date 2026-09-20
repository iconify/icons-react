import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xxy1mo78q.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xxy1mo78q"/>`,
		"fallback": "memory:alpha-g",
	});
}

export default Component;
