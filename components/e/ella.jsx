import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/c/cv_w504ff.css';
import '../../css/s/spmnadb4p.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="cv_w504ff"/><path class="spmnadb4p"/></g>`,
		"fallback": "cryptocurrency-color:ella",
	});
}

export default Component;
