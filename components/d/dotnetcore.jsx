import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wtropbt-f.css';
import '../../css/h/hal2ihy4e.css';
import '../../css/o/o42u20lrm.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wtropbt-f"><path class="hal2ihy4e"/><path class="o42u20lrm"/></g>`,
		"fallback": "thesvg-color:dotnetcore",
	});
}

export default Component;
