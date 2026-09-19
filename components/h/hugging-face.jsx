import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jnd9-ne4y.css';
import '../../css/z/z4uc8iroz.css';
import '../../css/l/l4oa2u-qt.css';
import '../../css/t/t636udgel.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jnd9-ne4y"/><path class="z4uc8iroz"/><path class="l4oa2u-qt"/><path class="t636udgel"/></g>`,
		"fallback": "fluent-emoji-flat:hugging-face",
	});
}

export default Component;
