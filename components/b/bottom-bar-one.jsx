import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rinuwhlnp.css';
import '../../css/k/k9cv1rbvs.css';
import '../../css/m/msr4e6bsf.css';
import '../../css/n/nakatxb2m.css';
import '../../css/f/f_ebaacko.css';

const viewBox = {"width":49,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rinuwhlnp"><path class="k9cv1rbvs"/><path class="msr4e6bsf"/><path class="nakatxb2m"/><path class="f_ebaacko"/></g>`,
		"fallback": "icon-park:bottom-bar-one",
	});
}

export default Component;
