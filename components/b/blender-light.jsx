import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/djqetsxsa.css';
import '../../css/d/dfzz3w77i.css';
import '../../css/p/pupt13zxe.css';
import '../../css/o/oj9-3vb9h.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="djqetsxsa"/><path class="dfzz3w77i"/><path class="pupt13zxe"/><path class="oj9-3vb9h"/></g>`,
		"fallback": "skill-icons:blender-light",
	});
}

export default Component;
