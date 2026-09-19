import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f3fziz2vw.css';
import '../../css/x/xtkqegbkm.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f3fziz2vw"/><path class="xtkqegbkm"/>`,
		"fallback": "carbon:chart-combo-stacked",
	});
}

export default Component;
