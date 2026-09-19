import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/o/o575svbvu.css';
import '../../css/k/kl37bqb8y.css';
import '../../css/u/ur85n9t3b.css';

const viewBox = {"width":32,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="o575svbvu"/><path class="kl37bqb8y"/><path class="ur85n9t3b"/></g>`,
		"fallback": "flagpack:be",
	});
}

export default Component;
