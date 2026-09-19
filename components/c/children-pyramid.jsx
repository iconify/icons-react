import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/a/anrblq2of.css';
import '../../css/u/u90vnfbeh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="anrblq2of"/><path class="u90vnfbeh"/></g>`,
		"fallback": "icon-park-solid:children-pyramid",
	});
}

export default Component;
