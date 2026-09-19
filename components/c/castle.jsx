import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/k/k0phntbpf.css';
import '../../css/f/f78qppjnj.css';
import '../../css/g/g_i87xbuh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="k0phntbpf"/><path class="f78qppjnj"/><path class="g_i87xbuh"/></g>`,
		"fallback": "icon-park-solid:castle",
	});
}

export default Component;
