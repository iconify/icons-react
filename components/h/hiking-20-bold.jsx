import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r9jgtejbn.css';
import '../../css/e/ekd7jsf_c.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r9jgtejbn"/><path class="ekd7jsf_c"/>`,
		"fallback": "energy-icons:hiking-20-bold",
	});
}

export default Component;
