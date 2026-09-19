import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/a/a4z8s6thj.css';
import '../../css/q/q6-g7vdkb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path clip-rule="evenodd" class="a4z8s6thj"/><path class="q6-g7vdkb"/></g>`,
		"fallback": "icon-park-outline:connect",
	});
}

export default Component;
