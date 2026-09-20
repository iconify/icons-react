import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cmt79bmyh.css';
import '../../css/x/xgbdvpp9y.css';
import '../../css/j/jq7-x9bnn.css';
import '../../css/g/g7z4pzhpl.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cmt79bmyh"/><path class="xgbdvpp9y"/><path class="jq7-x9bnn"/><path class="g7z4pzhpl"/></g>`,
		"fallback": "streamline-color:ai-edit-spark",
	});
}

export default Component;
