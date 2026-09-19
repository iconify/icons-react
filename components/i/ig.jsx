import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/c/cbim_vtrq.css';
import '../../css/y/ytiz7kbua.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="circleFlagsIg0"><circle class="bc1fd0lxe"/></mask><g mask="url(#circleFlagsIg0)"><path class="cbim_vtrq"/><path class="ytiz7kbua"/></g>`,
		"fallback": "circle-flags:ig",
	});
}

export default Component;
