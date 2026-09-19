import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3lph30dl.css';
import '../../css/l/l5l0yeoqo.css';
import '../../css/c/cmd33kt4l.css';
import '../../css/l/lnqa5nb4k.css';
import '../../css/l/lt5tfr-sk.css';
import '../../css/u/uh05tmb8k.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3lph30dl"><rect class="l5l0yeoqo"/><path class="cmd33kt4l"/><path class="lnqa5nb4k"/><path class="lt5tfr-sk"/><path class="uh05tmb8k"/></g>`,
		"fallback": "icon-park:grid-nine",
	});
}

export default Component;
