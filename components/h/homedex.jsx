import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ew16t5bon.css';
import '../../css/m/mfhjfna5c.css';
import '../../css/b/b3g89hl7j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ew16t5bon"/><path class="mfhjfna5c"/><path class="b3g89hl7j"/>`,
		"fallback": "selfhst:homedex",
	});
}

export default Component;
