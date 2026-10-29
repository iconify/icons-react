import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/a/a2nd9ub4u.css';
import '../../css/i/i2fzhbc8u.css';
import '../../css/n/nonr4pbax.css';
import '../../css/u/ux535excy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="a2nd9ub4u wm-k"/><path class="i2fzhbc8u wm-a"/><path class="nonr4pbax wm-k"/><path class="ux535excy"/></g>`,
		"fallback": "withicons-bauhaus:fireplace",
	});
}

export default Component;
