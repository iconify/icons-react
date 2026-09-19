import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/h/hr2vw8qnh.css';
import '../../css/e/efq5ztb1c.css';
import '../../css/n/ncqlw91-h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="circleFlagsHy0"><circle class="bc1fd0lxe"/></mask><g mask="url(#circleFlagsHy0)"><path class="hr2vw8qnh"/><path class="efq5ztb1c"/><path class="ncqlw91-h"/></g>`,
		"fallback": "circle-flags:hy",
	});
}

export default Component;
