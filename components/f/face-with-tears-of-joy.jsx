import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jnd9-ne4y.css';
import '../../css/c/c9cdqccmn.css';
import '../../css/l/laqem3yyk.css';
import '../../css/p/pwtfkab3z.css';
import '../../css/h/h1nj-i_im.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jnd9-ne4y"/><path class="c9cdqccmn"/><path class="laqem3yyk"/><path class="pwtfkab3z"/><path class="h1nj-i_im"/></g>`,
		"fallback": "fluent-emoji-flat:face-with-tears-of-joy",
	});
}

export default Component;
