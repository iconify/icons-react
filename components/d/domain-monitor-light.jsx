import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o2_q7l7lm.css';
import '../../css/l/lmsh1d1cc.css';
import '../../css/o/oen_blbax.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o2_q7l7lm"/><path class="lmsh1d1cc"/><path class="oen_blbax"/>`,
		"fallback": "selfhst:domain-monitor-light",
	});
}

export default Component;
