import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/djqetsxsa.css';
import '../../css/l/l7e6q-b4j.css';
import '../../css/r/ro181ob5i.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="djqetsxsa"/><path clip-rule="evenodd" class="l7e6q-b4j"/><path clip-rule="evenodd" class="ro181ob5i"/></g>`,
		"fallback": "skill-icons:alpinejs-light",
	});
}

export default Component;
