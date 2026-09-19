import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f_554nb3a.css';
import '../../css/c/cxh3ar5_e.css';

const viewBox = {"width":9,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f_554nb3a"/><path class="cxh3ar5_e"/>`,
		"fallback": "formkit:arrowup",
	});
}

export default Component;
