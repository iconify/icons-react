import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/og_9js9al.css';
import '../../css/t/tke4h5b0x.css';
import '../../css/l/l4lx3bbae.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><circle class="og_9js9al"/><circle class="tke4h5b0x"/><path class="l4lx3bbae"/></g>`,
		"fallback": "meteor-icons:git-pull-create",
	});
}

export default Component;
