import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oxtlt7b7q.css';
import '../../css/q/qstkl7k-a.css';
import '../../css/l/lmkdduojj.css';
import '../../css/e/e6g7n5bmt.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="oxtlt7b7q"/><path class="qstkl7k-a"/><path class="lmkdduojj"/><path class="e6g7n5bmt"/></g>`,
		"fallback": "streamline-color:beer-pitch",
	});
}

export default Component;
