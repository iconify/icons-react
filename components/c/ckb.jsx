import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/d/djxixtxah.css';
import '../../css/t/t3p_-vs5e.css';
import '../../css/i/i1bqeia1p.css';
import '../../css/w/wvxz82bkx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="circleFlagsCkb0"><circle class="bc1fd0lxe"/></mask><g mask="url(#circleFlagsCkb0)"><path class="djxixtxah"/><path class="t3p_-vs5e"/><path class="i1bqeia1p"/><path class="wvxz82bkx"/></g>`,
		"fallback": "circle-flags:ckb",
	});
}

export default Component;
