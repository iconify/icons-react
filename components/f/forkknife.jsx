import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oen2_6b7t.css';
import '../../css/n/nv21e7b0y.css';
import '../../css/a/ao36abnej.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="oen2_6b7t"/><circle class="nv21e7b0y"/><path class="ao36abnej"/>`,
		"fallback": "fxemoji:forkknife",
	});
}

export default Component;
