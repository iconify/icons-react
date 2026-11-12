import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tzakf0b0i.css';
import '../../css/n/n4t564n_z.css';
import '../../css/o/oqux2148l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tzakf0b0i"/><path class="n4t564n_z"/><path class="oqux2148l"/>`,
		"fallback": "selfhst:domain-watchdog",
	});
}

export default Component;
