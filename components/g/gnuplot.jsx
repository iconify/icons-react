import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zzt8tcrza.css';

const viewBox = {"width":16,"height":16,"top":-16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zzt8tcrza"/>`,
		"fallback": "material-icon-theme:gnuplot",
	});
}

export default Component;
