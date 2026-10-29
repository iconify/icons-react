import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/q/qhxnkgbtu.css';
import '../../css/h/hjfiyp-px.css';
import '../../css/u/uwm4jbcqe.css';
import '../../css/c/c-jjv0dny.css';
import '../../css/f/ff-f2dk6p.css';
import '../../css/r/r9nf9fbhd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="qhxnkgbtu wm-deco"/><path class="hjfiyp-px wm-deco"/><path class="uwm4jbcqe wm-k"/><path class="c-jjv0dny wm-a"/><path class="ff-f2dk6p wm-k"/><path class="r9nf9fbhd wm-a"/></g>`,
		"fallback": "withicons:chevrons-left-blueprint",
	});
}

export default Component;
