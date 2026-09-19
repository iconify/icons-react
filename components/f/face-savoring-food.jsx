import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jnd9-ne4y.css';
import '../../css/c/c9cdqccmn.css';
import '../../css/o/o5ix8ibsr.css';
import '../../css/w/w74l7ybxx.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jnd9-ne4y"/><path class="c9cdqccmn"/><path class="o5ix8ibsr"/><path class="w74l7ybxx"/></g>`,
		"fallback": "fluent-emoji-flat:face-savoring-food",
	});
}

export default Component;
