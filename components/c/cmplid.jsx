import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/exb3jaceo.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="exb3jaceo"/>`,
		"fallback": "fa7-brands:cmplid",
	});
}

export default Component;
