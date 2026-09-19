import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c1ws9_odf.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c1ws9_odf"/>`,
		"fallback": "icomoon-free:calculator",
	});
}

export default Component;
