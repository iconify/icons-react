import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jdsu42b0b.css';
import '../../css/r/rz90g2b4y.css';
import '../../css/g/g0ayhhqoh.css';
import '../../css/c/cr79zmb6s.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="jdsu42b0b"/><path class="rz90g2b4y"/><path class="g0ayhhqoh"/><path class="cr79zmb6s"/>`,
		"fallback": "carbon:cd-create-exchange",
	});
}

export default Component;
