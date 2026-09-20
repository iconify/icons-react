import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f9jd4lb3h.css';
import '../../css/q/qx2necw3z.css';
import '../../css/f/fifs5bbjv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f9jd4lb3h"/><circle class="qx2necw3z"/><path class="fifs5bbjv"/>`,
		"fallback": "selfhst:freeradius",
	});
}

export default Component;
