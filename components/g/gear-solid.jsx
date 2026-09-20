import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jd_stkbfn.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jd_stkbfn"/>`,
		"fallback": "rivet-icons:gear-solid",
	});
}

export default Component;
