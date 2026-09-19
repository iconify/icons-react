import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/e/e8yohmb3w.css';
import '../../css/m/me1_ckb-s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="circleFlagsEl0"><circle class="bc1fd0lxe"/></mask><g mask="url(#circleFlagsEl0)"><path class="e8yohmb3w"/><path class="me1_ckb-s"/></g>`,
		"fallback": "circle-flags:el",
	});
}

export default Component;
