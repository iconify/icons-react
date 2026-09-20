import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/djqetsxsa.css';
import '../../css/m/mfefy2b5h.css';
import '../../css/a/avnz0dbim.css';
import '../../css/a/aia7l3btd.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="djqetsxsa"/><path clip-rule="evenodd" class="mfefy2b5h"/><path clip-rule="evenodd" class="avnz0dbim"/><path clip-rule="evenodd" class="aia7l3btd"/></g>`,
		"fallback": "skill-icons:activitypub-light",
	});
}

export default Component;
