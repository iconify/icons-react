import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/eidx1vlbr.css';
import '../../css/l/lxr-c948j.css';
import '../../css/i/ipemp-yqm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="eidx1vlbr"/><path class="lxr-c948j"/><path class="ipemp-yqm"/></g>`,
		"fallback": "keyline-icons:film-sparkles-two-tone",
	});
}

export default Component;
