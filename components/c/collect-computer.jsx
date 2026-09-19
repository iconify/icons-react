import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/y/yjmut_51b.css';
import '../../css/n/ndpf7ubuk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="yjmut_51b"/><path class="ndpf7ubuk"/></g>`,
		"fallback": "icon-park-solid:collect-computer",
	});
}

export default Component;
