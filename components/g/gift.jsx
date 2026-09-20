import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/o4jcstbtn.css';
import '../../css/a/ab-n9ub9f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><rect class="o4jcstbtn"/><path class="ab-n9ub9f"/></g>`,
		"fallback": "meteor-icons:gift",
	});
}

export default Component;
